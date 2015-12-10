// Make new object as export
module.exports = {};

//Mock Database
var items = ["Oefening maken"];

module.exports.getTodo = function(req, res, next) {
  if(req.query.hasOwnProperty('id')) {
    var id = parseInt(req.param('id'));
    items.splice(id, 1);

    res.redirect('/todolist');
    return;
  }

  res.render('todo',{
    todoList: items
  })
};

module.exports.postTodo = function(req, res, next) {
  var item = req.body.todoitem;
  //Push item in todolist array
  items.unshift(item);

  //Redirect back to the page
  res.redirect('/todolist');
};
