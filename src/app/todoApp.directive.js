function todoApp() {
  return  {
    restrict: 'E',
    controller: 'TodoController as todo',
    templateUrl: 'app/todo-app.html'
  }
}

angular
  .module('app')
  .directive('todoApp', todoApp);
