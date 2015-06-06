controllers.controller('TodoCtrl', function ($scope, $http, $location) {
  $scope.message = "Todo!"
  $scope.myTodos = [];

  $scope.submitTodo = function(){
    console.log('you clicked the submitTodo button')
    $http({
          method: 'POST',
          url: '/api/tasks',
          data: $scope.todo
        }).
        success(function (data, status, headers, config) {
          console.log('you saved it!')
          $scope.getTodos();

        }).
        error(function (data, status, headers, config) {
          console.log('todo save failed')
        });
  }

$scope.getTodos = function(){
    console.log('you clicked the submitTodo button')
    $http({
          method: 'GET',
          url: '/api/tasks',
        }).
        success(function (data, status, headers, config) {
          console.log('you found it!', data)
          $scope.myTodos = data

        }).
        error(function (data, status, headers, config) {
          console.log('todo save failed')
        });
}

$scope.getTodos();

$scope.deleteTodos = function(){
    console.log('you clicked the deleteTodo button')
    $http({
          method: 'DELETE',
          url: '/api/tasks/:id',
        }).
        success(function (data, status, headers, config) {
          console.log('you killed it', data)
          $scope.myTodos = data

        }).
        error(function (data, status, headers, config) {
          console.log('todo delete failed')
        });
}

});
