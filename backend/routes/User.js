var express = require('express');
var router = express.Router();

//import user controller
var user = require('../Controllers/User.controller');

/*Get all users */
router.get('/', user.findAll);

/*Get one user */
router.get('/userId', user.findOne);

/*Delete one user */
router.delete('/userId', user.delete);

/*Update one user */
router.post('/userId', user.update);

/*Create one user */
router.put('/', user.create);

module.exports = router;



