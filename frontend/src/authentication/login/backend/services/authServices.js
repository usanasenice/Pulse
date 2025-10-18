const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const AuthService = {
    register: async (username, email, password) => {
        // Check if user exists
        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        // Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create User
        const newUser = await User.create(username, email, hashedPassword);
        return newUser;
    }
};

module.exports = AuthService;
