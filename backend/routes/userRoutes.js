const express = require('express');
const { signUp, signIn, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
