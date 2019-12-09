const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        _id: {
            type : mongoose.Schema.Types.ObjectId,
            required:  true
        },
        localisation:{
            type: String,
            required: true
        },
        personInHouse:{
            type: Number,
            required: true
        },
        houseSize: {
            type: String,
            required: true,
        },
    },
        {
            timestamps: true,
        }
);

module.exports = mongoose.model('User', userSchema);