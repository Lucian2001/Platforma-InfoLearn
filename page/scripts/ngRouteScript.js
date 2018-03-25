app.config(['$routeProvider',
   function($routeProvider,$scope) {
   $routeProvider .when("/1/1", {
   templateUrl : "page/algoritmul.php",
       reloadOnSearch: false,

})
.when("/1/2", {
templateUrl : "page/expresiiaritmetica.php",
   reloadOnSearch: false,

})
       .when("/1/3", {
templateUrl : "page/operatorirelationali.php",
   reloadOnSearch: false,

})

}]);
