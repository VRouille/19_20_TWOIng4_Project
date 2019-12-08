const Measure = require('../Models/Measure.model');

// Create and Save a new Measure
exports.create = (req, res) => {
    // Validate request
    if (!req.body._id) {
      // If id is not present in body reject the request by
      // sending the appropriate http code
      return res.status(400).send({
        message: 'id can not be empty'
      });
    }

    // Create a new measure
    const sensor = new Sensor({
        _id: req.body._id,
        type: req.body.type,
        creationDate:req.body.creationDate,
        sensorID : req.body.sensorID,
        value : req.body.value,
    });

    // Save measure in the database
    measure
    .save()
    .then(measure => {
        // we wait for insertion to be complete and we send the newly measure integrated
        res.send(measure);
    })
    .catch(err => {
        // In case of error during insertion of a new measure in database we send an
        // appropriate message
        res.status(500).send({
        message: err.message || 'Some error occurred while creating the new measure.'
        });
    });
    };

    // Retrieve and return all measures from the database.
    exports.findAll = (req, res) => {
        Measure.find()
        .then(measures => {
            res.send(measures);
        })
        .catch(err => {
            // In case of error during research of all measures in database we send an
            // appropriate message
            res.status(500).send({
            message: err.message || 'Some error occurred while retrieving measures.'
            });
        });
    };

    // Find a measure with a measureId
    exports.findOne = (req, res) => {
        Measure.findById(req.params.measureId)
        .then(measure => {
            if (!measure) {
            return res.status(404).send({
                message: 'Measure not found with id ' + req.params.measureId
            });
            }
            res.send(measure);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: 'Measure not found with id ' + req.params.measureId
            });
            }
            return res.status(500).send({
            message: 'Error retrieving measure with id ' + req.params.measureId
            });
        });
    };

    // Update an measure identified by the measureId in the request
    exports.update = (req, res) => {
        // Validate Request
        if (!req.body._id) {
        return res.status(400).send({
            message: 'id can not be empty'
        });
        }
    // Find measure and update it with the request body
    Measure.findByIdAndUpdate(
        req.params.measureId,
        {
            _id: req.body._id,
            type: req.body.type,
            creationDate:req.body.creationDate,
            sensorID : req.body.sensorID,
            value : req.body.value,
        },
        { new: true }
    )
        .then(measure => {
        if (!measure) {
            return res.status(404).send({
            message: 'Measure not found with id ' + req.params.measureId
            });
        }
        res.send(measure);
        })
        .catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
            message: 'Measure not found with id ' + req.params.measureId
            });
        }
        return res.status(500).send({
            message: 'Error updating measure with id ' + req.params.measureId
        });
        });
    };

    // Delete an measure with the measureId in the request
    exports.delete = (req, res) => {
        Measure.findByIdAndRemove(req.params.measureId)
        .then(measure => {
            if (!measure) {
            return res.status(404).send({
                message: 'Measure not found with id ' + req.params.measureId
            });
            }
            res.send({ message: 'Measure deleted successfully!' });
        })
        .catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: 'Measure not found with id ' + req.params.measureId
            });
            }
            return res.status(500).send({
            message: 'Could not delete measure with id ' + req.params.measureId
            });
        });
    };