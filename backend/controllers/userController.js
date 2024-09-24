const pool = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Sign Up Controller
const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    // Check if all fields are provided
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please fill all the fields' });
    }

    // Check if user already exists
    const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert new user into database
    const newUser = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, hashedPassword]
    );

    // Generate JWT
    const token = jwt.sign({ id: newUser.rows[0].id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    res.status(201).json({
      message: 'User created successfully',
      token,
    });
  } catch (err) {
    next(err);
  }
};

// Sign In Controller
const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide both email and password' });
    }

    // Check if user exists
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (user.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Validate password
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Generate JWT
    const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    res.status(200).json({
      message: 'Logged in successfully',
      token,
    });
  } catch (err) {
    next(err);
  }
};

// Update User Controller
const updateUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  const userId = req.params.id;
  try {
    // Check if user exists
    const user = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
    if (user.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Hash password if updated
    let hashedPassword = user.rows[0].password;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(password, salt);
    }

    // Update user
    const updatedUser = await pool.query(
      'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *',
      [name || user.rows[0].name, email || user.rows[0].email, hashedPassword, userId]
    );

    res.status(200).json({
      message: 'User updated successfully',
      user: updatedUser.rows[0],
    });
  } catch (err) {
    next(err);
  }
};

// Delete User Controller
const deleteUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    // Check if user exists
    const user = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
    if (user.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Delete user
    await pool.query('DELETE FROM users WHERE id = $1', [userId]);

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = { signUp, signIn, updateUser, deleteUser };