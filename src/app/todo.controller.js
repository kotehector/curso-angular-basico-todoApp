function TodoController(TodoService) {
  var ctrl = this;
  //* Nueva Tarea
  ctrl.newTodo = '';
  //* Lista de Tareas
  this.list = [];

  //* TodoService.retrive()
  ctrl.getTodos = function() {
    TodoService
      .retrive()
      .then(function (response) {
        ctrl.list = response;
      });
  }
  ctrl.getTodos();


  //* Añadir Tarea
  ctrl.addTodo = function() {
    if(!ctrl.newTodo) {
      return;
    }

    TodoService
      .create({
        title: ctrl.newTodo,
        completed: false
      })
      .then(function(response) {
        ctrl.list.unshift({
          title: ctrl.newTodo,
          completed: false
        });
        ctrl.newTodo = '';
      });
  };

  //* Borrar Tarea
  ctrl.removeTodo = function(item, index) {
    TodoService
      .remove(item)
      .then(function (response) {
          ctrl.list.splice(index, 1);
      });

  };

  //* Actualizar Tarea
  ctrl.updateTodo = function(item, index) {
    if (!item.title) {
      // TodoService
      //   .remove(item);
      ctrl.removeTodo(item, index);
      return;
    }
    TodoService.update(item);
  }

  //* Filtro con expresiones que devuelve la cantidad de tareas finalizadas
  ctrl.getRemaning = function() {
    return this.list.filter(function(item) {
      return !item.completed;
    });
  };

  ctrl.toggleState = function (item) {
    TodoService
      .update(item)
      .then( function (response) {

      }, function(error) {
        item.completed = !item.completed;
      });
  }









}

angular
  .module('app')
  .controller('TodoController', TodoController);
