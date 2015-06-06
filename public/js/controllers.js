'use strict';

/* Controllers */

var controllers = angular.module('myApp.controllers', [])
controllers.controller('AppCtrl', function ($scope, $http) {
    $http({
          method: 'GET',
          url: '/api/user'
        }).
        success(function (data, status, headers, config) {
          $scope.name = data.username;
        }).
        error(function (data, status, headers, config) {
          $scope.name = 'Error!';
        });
  })


