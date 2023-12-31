const express = require('express');
const router = express.Router();
const Signup = require('../Models/Register');

// POST: Register a new user
router.post('/', async (req, res) => {
  const { username, gmail, password, phone_number, dob } = req.body;

  try {
    const existingUser = await Signup.findOne({ $or: [{ username }, { gmail }, { phone_number }] });

    if (existingUser) {
      return res.status(400).json({ message: 'Username, Gmail, or Phone number is already in use.' });
    }

    const signup = new Signup({ username, gmail, password, phone_number, dob });
    await signup.save();
    res.status(201).json(signup);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET: Get all users
router.get('/', async (req, res) => {
  try {
    const users = await Signup.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET: Get user by username
router.get('/:username', async (req, res) => {
  try {
    const user = await Signup.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT: Update user details by username
router.put('/:username', async (req, res) => {
  const { gmail, password, phone_number, dob } = req.body;

  try {
    const updatedUser = await Signup.findOneAndUpdate({ username: req.params.username }, {
      gmail,
      password,
      phone_number,
      dob,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE: Delete user by username
router.delete('/:username', async (req, res) => {
  try {
    const deletedUser = await Signup.findOneAndDelete({ username: req.params.username });
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.json({ message: 'User deleted successfully.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
