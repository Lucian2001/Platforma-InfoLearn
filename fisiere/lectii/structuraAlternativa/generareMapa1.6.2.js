function generareTeren(){
var target;
for(var i=1;i<=6;i++)
for(var j=1;j<=6;j++)
if(i==3 ){
target=i*10+j;
    if (target==34){
          $("#id-"+target).attr('src','fisiere/assets/images/road_block.png');
    limite[target]=1;
    }else{
    $("#id-"+target).attr('src','fisiere/assets/images/road.png');

    limite[target]=1;
    }

}
else if (i*10+j!=target) {
    $("#id-"+(i*10+j)).attr('src','fisiere/assets/images/iarba.png');
}
 limite[23]=1;
     limite[33]=1;
     limite[35]=1;
     limite[24]=1;
     limite[25]=1;
     limite[36]=1;
limite[34]=0;
 $("#id-"+23).attr('src','fisiere/assets/images/curba3.png');
     $("#id-"+33).attr('src','fisiere/assets/images/road_intersectie.png');
       $("#id-"+35).attr('src','fisiere/assets/images/road_intersectie.png');
       $("#id-"+24).attr('src','fisiere/assets/images/road.png');
       $("#id-"+25).attr('src','fisiere/assets/images/curba.png');
       $("#id-"+36).attr('src','fisiere/assets/images/road_target.png');
}
