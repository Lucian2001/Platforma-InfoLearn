app.config(['$routeProvider',
   function($routeProvider,$scope) {
   $routeProvider .when("/1/1", {
   templateUrl : "fisiere/algoritmul.php",
       reloadOnSearch: false,

})
.when("/1/2", {
templateUrl : "fisiere/expresiiaritmetica.php",
   reloadOnSearch: false,

})
       .when("/1/3", {
templateUrl : "fisiere/operatorirelationali.php",
   reloadOnSearch: false,

})
.when("/1/4", {
templateUrl : "fisiere/expresiiLogice.php",
reloadOnSearch: false,

})
.when("/1/5", {
templateUrl : "fisiere/buclaRepetitiva.php",
reloadOnSearch: false,

})
       .when("/1/6", {
templateUrl : "fisiere/structuraAlternativa.php",
reloadOnSearch: false,

})
         .when("/evaluare", {
templateUrl : "fisiere/evaluare.php",
reloadOnSearch: false,

})
        .when("/profesor", {
templateUrl : "fisiere/profesor.php",
templateUrl : "fisiere/profesor.php",
reloadOnSearch: false,

})

}]);
