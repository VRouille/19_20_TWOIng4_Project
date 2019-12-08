var express = require('express');
var router = express.Router();

//import user controller
var sensor = require('../Controllers/Sensor.controller');

/*Get all sensors */
router.get('/', sensor.findAll);

/*Get one sensor */
router.get('/:sensorId', sensor.findOne);

/*Delete one sensor */
router.get('/:sensorId', sensor.delete);

/*Update one sensor */
router.get('/:sensorId', sensor.update);

/*Creat one sensor */
router.get('/', sensor.create);

module.exports = router;