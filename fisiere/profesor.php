<link rel="stylesheet" href="fisiere/css/profesor.css">
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" ng-click="">Inregistreaza Elevi</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" ng-click="">Scoruri Elevi</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" ng-click="">Statistici</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " ng-click="">Evaluare</a>
  </li>
</ul>
<body ng-app="myApp">
<div ng-controller="paginaProfesor">
  <div ng-include src="src1">
  </div>
</div>
</body>
<script>
$("#scorePanel").hide();
</script>
