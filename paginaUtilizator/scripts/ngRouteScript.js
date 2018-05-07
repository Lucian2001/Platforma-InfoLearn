app.config(['$routeProvider',
   function($routeProvider,$scope) {
   $routeProvider .when("/1/1", {
   templateUrl : "paginaUtilizator/algoritmul.php",
       reloadOnSearch: false,

})
.when("/1/2", {
templateUrl : "paginaUtilizator/expresiiaritmetica.php",
   reloadOnSearch: false,

})
       .when("/1/3", {
templateUrl : "paginaUtilizator/operatorirelationali.php",
   reloadOnSearch: false,

})
.when("/1/4", {
templateUrl : "paginaUtilizator/expresiiLogice.php",
reloadOnSearch: false,

})
.when("/1/5", {
templateUrl : "paginaUtilizator/buclaRepetitiva.php",
reloadOnSearch: false,

})
       .when("/1/6", {
templateUrl : "paginaUtilizator/structuraAlternativa.php",
reloadOnSearch: false,

})
         .when("/evaluare", {
templateUrl : "paginaUtilizator/evaluare.php",
reloadOnSearch: false,

})

}]);
