app.config(['$routeProvider',
   function($routeProvider,$scope) {
   $routeProvider .when("/1/1", {
   templateUrl : "paginaVizitator/algoritmul.php",
       reloadOnSearch: false,

})
.when("/1/2", {
templateUrl : "paginaVizitator/expresiiaritmetica.php",
   reloadOnSearch: false,

})
       .when("/1/3", {
templateUrl : "paginaVizitator/operatorirelationali.php",
   reloadOnSearch: false,

})
.when("/1/4", {
templateUrl : "paginaVizitator/expresiiLogice.php",
reloadOnSearch: false,

})

}]);
