
// Module requires
var express = require('express');
var router = express.Router();

// Require our controller
var homeController = require('./../controllers/homeController');

/* GET home page. */
router.get('/', homeController.getHome);

/* POST home page */
router.post('/', homeController.postHome);

module.exports = router;
