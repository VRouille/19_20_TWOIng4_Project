const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema(
    {
        _id:[{type : mongoose.Schema.Types.ObjectId}],
        creationDate: Date,
        location:{
            type: String,
            required: true
        },
        userID:[{type : mongoose.Schema.Types.ObjectId, ref:'user'}]
    }
);

module.exports = mongoose.model('Sensor', sensorSchema);