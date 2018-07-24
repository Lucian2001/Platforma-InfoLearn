<link rel="stylesheet" href="fisiere/profesor/profesor.css">
<body ng-app="myApp"><div ng-controller="paginaProfesor">
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a id="inregistrare"class="nav-link active" ng-click="inregistrare()">Inregistreaza Elevi</a>
  </li>
  <li class="nav-item">
    <a id="statistici" class="nav-link" ng-click="statistici()">Statistici</a>
  </li>
  <li class="nav-item">
    <a id="evaluare11"class="nav-link" ng-click="evaluare()">Evaluare</a>
  </li>
</ul>


  <div ng-include src="src1">
  </div>
</div>
</body>
<script>
$("#scorePanel").hide();
      if ( window.location.href=="https://infolearn.ml/index.php"){
                $("#continutInfo").show();
            } else{
                    $("#continutInfo").hide();
            }
</script>
