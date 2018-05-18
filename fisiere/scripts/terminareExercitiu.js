var x,y;
var a=[];
// DECLARARE a CU TOATE PAGINILE
a[11]=0;
 a[12]=0;
 a[13]=0;
 a[21]=0;
 a[22]=0;
 a[23]=0;
 a[31]=0;
 a[32]=0;
 a[41]=0;
 a[51]=0;
 a[52]=0;
 a[53]=0;
 a[54]=0;
 a[61]=0;
 a[62]=0;
 a[63]=0;
 a[64]=0;
//
function succes(){
var Id="";
 var url= window.location.href;
 for(i=0;i<url.length;i++){
if (url[i]!="/" && url[i]!="#" && (url[i]==1 || url[i]==2 || url[i]==3)){
 Id=Id+url[i];
}
}
 $("#id-"+Id).css("background-color","#d8ffd6");

$.ajax({   type:"POST",
  url:"fisiere/verificareSave.php",
  data:"Id=" + Id ,
success:function(result)
  {
x=result;
for(var i=1;i<=64;i++){
  if(a[i]==0){
y = x.substr(x.length - 3);
y=y.substr(x.length - 2);

x=x.substr(x.length - 3);
if (a[y]==0)
a[y]++;
  }
}

for(var i=1;i<=64;i++){
  if(a[i]==0){

  }
}

if (a[Id%100]==1 || Id=="111"){




eroareShow("Ai terminat aceasta aplicatie!");
} else{
  $.ajax({   type:"POST",
    url:"fisiere/testHttp.php",
    data:"Id=" + Id ,
  success:function(result)
    {
  eroareShow("Ai terminat aceasta aplicatie!");

     }

  });
}
   }

});

}
