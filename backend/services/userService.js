const express = require('express');
const { generateToken } = require('./auth');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const bcrypt = require('bcrypt'); // Import bcrypt
const router = express.Router();

// PostgreSQL connection pool
const pool = new Pool({
    user: process.env.DB_USER ,
    host: process.env.DB_HOST ,
    database: process.env.DB_NAME ,
    password: process.env.DB_PASSWORD ,
    port: process.env.DB_PORT ,
});

// Endpoint for password reset request
router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Email not registered.' });
        }

        const user = result.rows[0];
        const token = generateToken(user); // Generating JWT token with user info
        const resetLink = `http://localhost:5173/reset-password?token=${token}`;

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

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Reset link has been sent to your email.' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// Endpoint for resetting the password
// router.post('/reset-password', async (req, res) => {
//     const { token, newPassword } = req.body;

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const email = decoded.email;

//         // Hash the new password
//         const hashedPassword = await bcrypt.hash(newPassword, 10);

//         // Update the password in the database
//         await pool.query('UPDATE users SET password = $1 WHERE email = $2', [hashedPassword, email]);

//         res.status(200).json({ message: 'Password has been reset successfully.' });
//     } catch (error) {
//         console.error('Error resetting password:', error);
//         res.status(401).json({ message: 'Invalid or expired token.' });
//     }
// });





// Assuming you have a function to get user by token and update password
router.post('/reset-password', async (req, res) => {
    const { token, newPassword } = req.body;

    // Verify the token
    try {
        const decoded = jwt.verify(token, 'your_secret_key'); // Use your secret key
        const userId = decoded.id;

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update the user's password in the database
        const result = await pool.query('UPDATE users SET password = $1 WHERE id = $2', [hashedPassword, userId]);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error('Error resetting password:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
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
        const match = await bcrypt.compare(password, user.password); // bcrypt used here

        if (!match) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Sign in successful', user });
    } catch (error) {
        console.error('Error signing in:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


// Sign Up Route
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userCheck.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user into the database
        const result = await pool.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, hashedPassword]
        );

        const newUser = result.rows[0];
        const token = generateToken(newUser);

        res.status(201).json({
            message: 'User created successfully',
            token,
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email
            }
        });
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ message: 'Server error' });
    }
});



module.exports = router;
