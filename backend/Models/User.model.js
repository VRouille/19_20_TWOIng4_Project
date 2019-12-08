const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        _id:[{type : mongoose.Schema.Types.ObjectId}],
        localisation:{
            type: String,
            required: true
        },
        personInHouse : Number,
        houseSize: Number,
    }
);

module.exports = mongoose.model('User', userSchema);