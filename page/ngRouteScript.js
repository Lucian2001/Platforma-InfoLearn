app.config(['$routeProvider',
   function($routeProvider,$scope) {
   $routeProvider .when("/inceput/1/1", {
   templateUrl : "page/test17.html",
       reloadOnSearch: false,

})
.when("/inceput/1/2", {
templateUrl : "page/test17.html",
    reloadOnSearch: false,

})

}]);
