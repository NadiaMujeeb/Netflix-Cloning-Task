const express = require('express');
const { signUp, signIn, updateUser, deleteUser } = require('../controllers/userController');
const { generateToken, verifyToken } = require('../services/auth'); // Import your JWT functions
const nodemailer = require('nodemailer'); // Ensure this is imported if you're sending emails
const router = express.Router();

const bcrypt = require('bcrypt');
const { Pool } = require('pg'); // If you're using PostgreSQL

const { findUserByEmail, updatePassword } = require('../services/userService'); // Import your user service functions

router.post('/signup', signUp);
router.post('/signin', signIn);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Sign In Route
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = result.rows[0];

        // Ensure bcrypt is defined and available
        const match = await bcrypt.compare(password, user.password); // Compare hashed password
        if (!match) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Sign in successful', user });
    } catch (error) {
        console.error('Error signing in:', error.code, error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router; // Export the router


// Endpoint for password reset request
router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    // Logic to find the user by email
    const user = await findUserByEmail(email); // Replace with your function to find user
    if (!user) {
        return res.status(404).json({ message: 'Email not registered.' });
    }

    const token = generateToken(user);

    // Send email with the password reset link containing the token
    const resetLink = `http://localhost:3000/reset-password?token=${token}`; // Adjust the frontend URL as needed

    // Set up nodemailer transporter (adjust credentials)
    const transporter = nodemailer.createTransport({
        host: 'smtp-relay.brevo.com',
        port: 587,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Password Reset Request',
        text: `To reset your password, please click the following link: ${resetLink}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Reset link has been sent to your email.' });
});

// Endpoint for resetting the password
router.post('/reset-password', async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        const decoded = await verifyToken(token);
        // Logic to update the user's password
        await updatePassword(decoded.email, newPassword); // Your logic to update the password
        res.status(200).json({ message: 'Password has been reset successfully.' });
    } catch (error) {
        res.status(401).json({ message: 'Token is invalid or expired.' });
    }
});

module.exports = router;
