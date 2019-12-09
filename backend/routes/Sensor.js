var express = require('express');
var router = express.Router();

//import user controller
var sensor = require('../Controllers/Sensor.controller');

/*Get all sensors */
router.get('/', sensor.findAll);

/*Get one sensor */
router.get('/:sensorId', sensor.findOne);

/*Delete one sensor */
router.delete('/:sensorId', sensor.delete);

/*Update one sensor */
router.post('/:sensorId', sensor.update);

/*Create one sensor */
router.put('/', sensor.create);

module.exports = router;