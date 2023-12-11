const mongoose = require('mongoose');

const connectionDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit()
    }
};

module.exports = connectionDB;
