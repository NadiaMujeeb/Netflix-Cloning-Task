const express = require('express');
const { signUp, signIn, updateUser, deleteUser } = require('../controllers/userController');
const { generateToken, verifyToken } = require('../services/auth');
const { findUserByEmail, updatePassword } = require('../services/userService');
const nodemailer = require('nodemailer');
const router = express.Router();

// Sign Up Route
router.post('/signup', signUp);

// Sign In Route
router.post('/signin', signIn);

// Update User Route
router.put('/:id', updateUser);

// Delete User Route
router.delete('/:id', deleteUser);

// Forgot Password Route
router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
    
    try {
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(404).json({ message: 'Email not registered.' });
        }

        const token = generateToken(user);
        const resetLink = `http://localhost:5173/reset-password?token=${token}`;

        // Configure nodemailer transporter
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
            text: `Click the link to reset your password: ${resetLink}`,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Reset link has been sent to your email.' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Reset Password Route
router.post('/reset-password', async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        const decoded = await verifyToken(token);
        await updatePassword(decoded.email, newPassword);
        res.status(200).json({ message: 'Password has been reset successfully.' });
    } catch (error) {
        res.status(401).json({ message: 'Invalid or expired token.' });
    }
});

module.exports = router;
