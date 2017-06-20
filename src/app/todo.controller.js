function TodoController() {
  this.newTodo = '';
  this.addTodo = function() {
    this.list.unshift({
      title: this.newTodo,
      completed: false
    });
    this.newTodo = '';
  }
  this.removeTodo = function(item, index) {
    this.list.splice(index, 1);
  }
  this.list = [{
    title: 'Primera Tarea',
    completed: true
  },{
    title: 'Segunda Tarea',
    completed: false
  },{
    title: 'Tercera Tarea',
    completed: false
  }];
}

angular
  .module('app')
  .controller('TodoController', TodoController);
