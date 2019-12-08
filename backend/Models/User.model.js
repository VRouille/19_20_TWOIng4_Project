const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        _id: Number,
        localisation:{
            type: String,
            required: true
        },
        personInHouse : Number,
        houseSize: String,
    }
);

module.exports = mongoose.model('User', userSchema);