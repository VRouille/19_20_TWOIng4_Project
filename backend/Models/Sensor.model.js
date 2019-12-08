const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema(
    {
        _id:Number,
        creationDate: Date,
        location:{
            type: String,
            required: true
        },
        userID: Number,
    }
);

module.exports = mongoose.model('Sensor', sensorSchema);