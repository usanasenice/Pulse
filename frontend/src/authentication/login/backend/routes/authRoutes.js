const express = require('express');
const { signup } = require('../controllers/signupController');  // Import signup controller
const { login } = require('../controllers/loginController');    // Import login controller (not provided here)

const router = express.Router();

// Signup route
router.post('/signup', signup);

// Login route
router.post('/login', login);

module.exports = router;
