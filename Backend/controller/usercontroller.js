const User = require('../models/userModel'); // Assuming your User model is in the "model" directory
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

function generateAccessToken(id, isAdmin) {
    return jwt.sign({ userId: id, isAdmin: isAdmin }, process.env.secretKey);
}

exports.allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

    const users = await User.find(keyword).find({ _id: { $ne: req.userId._id } });
    res.send(users);

});


exports.login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
        const passwordMatch = await user.matchPassword(password);

        if (passwordMatch) {
            const token = generateAccessToken(user._id, user.isAdmin)
            return res.json({ success: true, message: 'Login successful', token });
        } else {
            return res.json({ success: false, message: 'Incorrect password' });
        }
    } else {
        return res.json({ success: false, message: 'User not found' });
    }
});

exports.signup = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
        const newUser = new User({ name, email, password });
        await newUser.save();
        return res.json({ success: true, message: 'Account created successfully' });
    } else {
        return res.json({ success: false, message: 'This Account already exists' });
    }
});

