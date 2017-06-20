function TodoController() {
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
