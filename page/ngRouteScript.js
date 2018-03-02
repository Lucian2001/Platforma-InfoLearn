app.config(['$routeProvider',
   function($routeProvider,$scope) {
   $routeProvider .when("/1/1", {
   templateUrl : "page/algoritmul.php",
       reloadOnSearch: false,

})
.when("/1/2", {
templateUrl : "page/test18.php",
   reloadOnSearch: false,

})

}]);
