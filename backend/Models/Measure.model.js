const mongoose = require('mongoose');

const measureSchema = new mongoose.Schema(
    {
        _id:[{type : mongoose.Schema.Types.ObjectId}],
        type: String,
        creationDate:Date,
        sensorID:[{type : mongoose.Schema.Types.ObjectId}],
        value: Number,
    }
);

module.exports = mongoose.model('Measure', measureSchema);