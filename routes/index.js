
// Module requires
var express = require('express');
var router = express.Router();

// Require our controller
var homeController = require('./../controllers/homeController');
var todoController = require('./../controllers/todoController');

/* GET home page. */
router.get('/', homeController.getHome);

/* POST home page */
router.post('/', homeController.postHome);

/* verwijder */
router.get('/delete/:email', homeController.getDelete);

/* GET Todo page */
router.get('/todolist', todoController.getTodo);

/* POST Todo page */
router.post('/todolist', todoController.postTodo);

module.exports = router;
