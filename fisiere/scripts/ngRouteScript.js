app.config(['$routeProvider',
   function($routeProvider,$scope) {
   $routeProvider .when("/1/1", {
   templateUrl : "fisiere/lectii/algoritmul/algoritmul.php",
       reloadOnSearch: false,

})
.when("/1/2", {
templateUrl : "fisiere/lectii/expresiiAritmetice/expresiiaritmetica.php",
   reloadOnSearch: false,

})
       .when("/1/3", {
templateUrl : "fisiere/lectii/operatoriRelationali/operatorirelationali.php",
   reloadOnSearch: false,

})
.when("/1/4", {
templateUrl : "fisiere/lectii/expresiiLogice/expresiiLogice.php",
reloadOnSearch: false,

})
.when("/1/5", {
templateUrl : "fisiere/lectii/buclaRepetitiva/buclaRepetitiva.php",
reloadOnSearch: false,

})
       .when("/1/6", {
templateUrl : "fisiere/lectii/structuraAlternativa/structuraAlternativa.php",
reloadOnSearch: false,

})
         .when("/evaluare", {
templateUrl : "fisiere/evaluare/evaluare.php",
reloadOnSearch: false,

})
        .when("/profesor", {
templateUrl : "fisiere/profesor/profesor.php",

reloadOnSearch: false,

})

}]);
