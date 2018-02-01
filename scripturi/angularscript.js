var app = angular.module('myApp', ['ngRoute','ng-fi-text','ngSanitize']);

  app.config(function($routeProvider) {
    $routeProvider .when("/", {
    templateUrl : "page/test2.html",
 });
 });


