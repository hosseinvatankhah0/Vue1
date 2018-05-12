var express = require('express');
var router = express.Router();
const SongsController = require('../controllers/SongsController');

/* post register  */
router.get('/',SongsController.index);
router.post('/',SongsController.post);
router.get('/:songId',SongsController.show);

module.exports = router;
