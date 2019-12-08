const mongoose = require('mongoose');

const measureSchema = new mongoose.Schema(
    {
        _id:Number,
        type: String,
        creationDate:Date,
        sensorID:Number,
        value: Number,
    }
);

module.exports = mongoose.model('Measure', measureSchema);