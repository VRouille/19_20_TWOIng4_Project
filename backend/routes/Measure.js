var express = require('express');
var router = express.Router();

//import user controller
var measure = require('../Controllers/Measure.controller');

/*Get all measures */
router.get('/', measure.findAll);

/*Get one measure */
router.get('/:measureId', measure.findOne);

/*Delete one measure */
router.get('/:measureId', measure.delete);

/*Update one measure */
router.get('/:measureId', measure.update);

/*Creat one measure */
router.get('/', measure.create);

module.exports = router;