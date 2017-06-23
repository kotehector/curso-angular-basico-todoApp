function TodoService($http) {

  var API = '//jsonplaceholder.typicode.com/todos/';

  function retrive() {
    return $http
            .get(API)
            .then( function(response) {
              return response.data.splice(0, 10);
            });
  }

  function create(todo) {
    return $http
            .post(API, todo)
            .then(function (response) {
              console.log(response.data);
              return response.data;
            })
  }

  function remove(todo) {
    return $http.delete(API + todo.id)
                .then(function(response) {
                  return response.data;
                })
  }

  function update(todo) {
    return $http.put(API + todo.id)
                .then(function(response) {
                  return response.data;
                });
  }

  return {
    retrive: retrive,
    create: create,
    remove: remove,
    update: update
  }
}

angular
  .module('app')
  .factory('TodoService', TodoService);
