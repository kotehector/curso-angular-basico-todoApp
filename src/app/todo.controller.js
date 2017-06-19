function TodoController() {
  this.list = [{
    title: 'Primera Tarea',
    completed: false
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
