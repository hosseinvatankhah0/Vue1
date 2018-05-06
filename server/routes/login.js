var express = require('express');
var router = express.Router();
const AuthenticationController = require('../controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy');

/* post register  */
router.post('/',AuthenticationController.login);

module.exports = router;
