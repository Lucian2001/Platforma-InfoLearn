app.config(['$routeProvider',
   function($routeProvider,$scope) {
   $routeProvider .when("/1/1", {
   templateUrl : "page/test17.php",
       reloadOnSearch: false,

})
//.when("/1/1/2", {
//templateUrl : "page/test17.html",
  // reloadOnSearch: false,

//})

}]);
