var express = require('express');
var router = express.Router();

//import user controller
var measure = require('../Controllers/Measure.controller');

/*Get all measures */
router.get('/', measure.findAll);

/*Get one measure */
router.get('/:measureId', measure.findOne);

/*Delete one measure */
router.delete('/:measureId', measure.delete);

/*Update one measure */
router.post('/:measureId', measure.update);

/*Create one measure */
router.put('/', measure.create);

module.exports = router;