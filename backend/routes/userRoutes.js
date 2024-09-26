const express = require('express');
const { signUp, signIn, updateUser, deleteUser } = require('../controllers/userController');
const { generateToken, verifyToken } = require('../services/auth');
const { resetPassword } = require('../controllers/userController');

const { findUserByEmail, updatePassword } = require('../controllers/userController');
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



// Reset Password Route
router.post('/reset-password', resetPassword);

module.exports = router;
