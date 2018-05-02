function generareTeren(){
var target;
for(var i=1;i<=6;i++)
for(var j=1;j<=6;j++)
if(i==j &&i!=6){
target=i*10+j;
    $("#id-"+target).attr('src','paginaUtilizator/assets/images/curba.png');
    limite[target]=1;
target=i*10+10+j;
  limite[target]=1;
    $("#id-"+target).attr('src','paginaUtilizator/assets/images/curba1.png');
}
else if (i*10+j!=target) {
    $("#id-"+(i*10+j)).attr('src','paginaUtilizator/assets/images/iarba.png');
}
$("#id-"+55).attr('src','paginaUtilizator/assets/images/road_target.png');
    $("#id-"+56).attr('src','paginaUtilizator/assets/images/road.png');
    $("#id-"+65).attr('src','paginaUtilizator/assets/images/iarba.png');

}

function generareTeren1(){
var target;
for(var i=1;i<=6;i++)
for(var j=1;j<=6;j++){

    $("#id-"+(i*10+j)).attr('src','paginaUtilizator/assets/images/iarba.png');
}
for(var j=1;j<=5;j++){  limite[1*10+j]=1;
  $("#id-"+(1*10+j)).attr('src','paginaUtilizator/assets/images/road.png');
}
for(var i=1;i<=5;i++){  limite[i*10+5]=1;
  $("#id-"+(i*10+5)).attr('src','paginaUtilizator/assets/images/road1.png');
}
for(var j=5;j>=1;j--){  limite[5*10+j]=1;
  $("#id-"+(5*10+j)).attr('src','paginaUtilizator/assets/images/road.png');
}
for(var i=5;i>=2;i--){  limite[i*10+1]=1;
  $("#id-"+(i*10+1)).attr('src','paginaUtilizator/assets/images/road1.png');
}
  $("#id-"+15).attr('src','paginaUtilizator/assets/images/curba.png');
    $("#id-"+51).attr('src','paginaUtilizator/assets/images/curba1_target.png');
        $("#id-"+55).attr('src','paginaUtilizator/assets/images/curba2.png');
        $("#id-"+11).attr('src','paginaUtilizator/assets/images/curba3.png');
}
