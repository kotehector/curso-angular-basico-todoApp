function TodoController() {
  //* Nueva Tarea
  this.newTodo = '';

  //* Añadir Tarea
  this.addTodo = function() {
    this.list.unshift({
      title: this.newTodo,
      completed: false
    });
    this.newTodo = '';
  };

  //* Borrar Tarea
  this.removeTodo = function(item, index) {
    this.list.splice(index, 1);
  };

  //* Filtro con expresiones que devuelve la cantidad de tareas finalizadas
  this.getRemaning = function() {
    return this.list.filter(function(item) {
      return !item.completed;
    });
  }

  //* Lista de Tareas
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
