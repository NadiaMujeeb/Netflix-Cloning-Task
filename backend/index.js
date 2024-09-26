require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');

const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./services/userService'); // Import user routes from userService.js
const nodemailer = require('nodemailer');
const errorHandler = require('./middleware/errorHandler');
const jwt = require('jsonwebtoken'); // For generating JWT tokens




const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection setup
const pool = new Pool({
    user: process.env.DB_USER ,
    host: process.env.DB_HOST ,
    database: process.env.DB_NAME ,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ,
   
});



// Assuming you have this in your password reset route
app.post('/api/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;

  try {
      // Generate a salt and hash the new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      // Update the user's password in the database (example)
      // const user = await User.findOneAndUpdate({ resetToken: token }, { password: hashedPassword });

      res.json({ message: 'Password successfully reset!' });
  } catch (error) {
      console.error('Error resetting password:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});




// Endpoint for forgot password
app.post('/api/forgot-password', async (req, res) => {
    console.log('Received forgot-password request:', req.body);
    const { email } = req.body;

    try {
        // Check if the email exists in your database
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Email not registered.' });
        }

        // If registered, get the user and send email with a password reset link
        const user = result.rows[0];

        // Generate a password reset token
        const resetToken = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Set up nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp-relay.brevo.com', // Brevo SMTP server
            port: 587,
            auth: {
                user: process.env.SMTP_USER, // Your Brevo email (e.g., BREVO_USER in .env)
                pass: process.env.SMTP_PASS, // Your Brevo SMTP API key
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_FROM || 'nadiamujeeb.29@gmail.com',
            to: email,
            subject: 'Password Reset Request',
            text: `To reset your password, please click on the following link: \n\n ${process.env.FRONTEND_URL}/reset-password?token=${resetToken} \n\n If you did not request a password reset, please ignore this email.`,
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Password reset email sent successfully.' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Failed to process your request.' });
    }
});


// Add this in your index.js or routes file
app.post('/api/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;

  try {
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const email = decoded.email;

      // Update the password in the database
      const hashedPassword = await bcrypt.hash(newPassword, 10); // Assuming bcrypt is used for hashing
      await pool.query('UPDATE users SET password = $1 WHERE email = $2', [hashedPassword, email]);

      res.status(200).json({ message: 'Password reset successfully.' });
  } catch (error) {
      console.error('Error resetting password:', error);
      res.status(500).json({ message: 'Failed to reset password.' });
  }
});




// Use user routes for user-related endpoints
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
