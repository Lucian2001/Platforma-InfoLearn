function generareTeren1(target) {

    var target1=Math.floor(target/10);
    var target2=target%10;
    var target3
    for(var i=1;i<7;i++)
    for(var j=1;j<7;j++){
        if (j!=target2 && i==target1){
        $("#id-"+i+j).attr('src','fisiere/assets/images/road.png');
        limite[i*10+j]=1;}
        else if(i*10+j!=target){
            $("#id-"+i+j).attr('src','fisiere/assets/images/iarba.png');
        }
    }
}
function generareTeren2(target){

    var iarba= new Array();

  iarba[1]=new Array(6);
  iarba[2]=new Array(6);
  iarba[3]=new Array(6);
  iarba[4]=new Array(6);
  iarba[5]=new Array(6);
  iarba[6]=new Array(6);


var a=1,b=1;
 for(a=1;a<7;a++)
 for(b=1;b<7;b++){
   iarba[a][b]=0;
 }
 for(i=1;i<7;i++)
 for(j=1;j<7;j++){
 if(  iarba[i][j]==0 && (i*10+j)!=target ){
      
    $("#id-"+i+j).attr('src','fisiere/assets/images/iarba.png');
 }
 }

  var target1=Math.floor(target/10);
  var target2=target%10;
  var random,random1;
  var min=1;
  var i=1;
  random=Math.floor((Math.random() * (target2-2 - min + 1)) + min);
  random1=target1;
   for(var j=1;j<=random;j++){

       $("#id-"+i+j).attr('src','fisiere/assets/images/road.png');
       limite[i*10+j]=1;
       if (j==random){
          $("#id-"+i+(j+1)).attr('src','fisiere/assets/images/curba.png');
           limite[i*10+j+1]=1;
       }
    }
for(i=2;i<=target1;i++){


          $("#id-"+i+(random+1)).attr('src','fisiere/assets/images/road1.png');
limite[i*10+(random+1)]=1;
          if (i==(target1)){
limite[i*10+random+1]=1;
            $("#id-"+i+(random+1)).attr('src','fisiere/assets/images/curba1.png');
          }
  }
if (random<=target2){
  for(j=random+2;j<7;j++){

if(j!=target2)
              $("#id-"+target1+j).attr('src','fisiere/assets/images/road.png');
limite[target1*10+j]=1;
  }
}

}


function generareTinta(locatiiValide,min,max,lungimeSir) {
    var ok=0;
random=Math.floor((Math.random() * (max - min + 1)) + min);
   for(i=0;i<lungimeSir;i++){
       if (random==locatiiValide[i]){
          return random;ok=1;
       }


   }
    if (ok==0){
        return generareTinta(locatiiValide,min,max,lungimeSir);
    }
}
