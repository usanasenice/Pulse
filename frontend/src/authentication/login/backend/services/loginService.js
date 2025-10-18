const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const LoginService = {
    authenticateUser: async (email, password) => {
        // Check if user exists
        const user = await User.findByEmail(email);
        if (!user) {
            throw new Error('Invalid credentials');
        }

        // Compare hashed passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }

        // Generate JWT Token
        const token = jwt.sign(
            { id: user.id, email: user.email }, 
            'your_secret_key', 
            { expiresIn: '1h' }
        );

        return { user, token };
    }
};

module.exports = LoginService;
