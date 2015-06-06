controllers.controller('NavCtrl', function ($scope, $rootScope, $location) {
  $scope.message = "NAV!"
  $scope.logout = function(){
    $rootScope.rootuser = null;
    $location.path('/')
  }

});