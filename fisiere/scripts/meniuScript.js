
var href1;
    var vector=[];
    // DECLARARE VECTOR CU TOATE PAGINILE
    vector[11]=0;
     vector[12]=0;
     vector[13]=0;
     vector[14]=0;
     vector[21]=0;
     vector[22]=0;
     vector[23]=0;
     vector[31]=0;
     vector[32]=0;
     vector[41]=0;
     vector[51]=0;
     vector[52]=0;
     vector[53]=0;
     vector[54]=0;
     vector[61]=0;
     vector[62]=0;
     vector[63]=0;
     vector[64]=0;
    //


    $("#evaluare").click(function(){
        $("#continutInfo").hide();
$(location).attr('href', "https://infolearn.ml/index.php#/evaluare");
  })
    $("#structuraAlternativa").click(function(){
$("#continutInfo").hide();
        loadSave(6);
 })

    $("#buclarepetitiva").click(function(){
$("#continutInfo").hide();
        loadSave(5);
})
$("#operatorirelationali").click(function(){
$("#continutInfo").hide();
    loadSave(3);
    })
    $("#inceput").click(function(){
$("#continutInfo").hide();
loadSave(1);
    })
    $("#expresiiaritmetice").click(function(){
    $("#continutInfo").hide();
        loadSave(2);
         
    })
    $("#expresiiLogice").click(function(){
    $("#continutInfo").hide();
        loadSave(4);
        

    })
 var meniuInceput=1;
 var id1=0;


$("#id--111").click(function(){

   $(location).attr('href',submenuhref("/1/1#1"));
       location.reload();
})
    $("#id--112").click(function(){

   $(location).attr('href',submenuhref("/1/1#2"));
          location.reload();
})
    $("#id--113").click(function(){

   $(location).attr('href', submenuhref("/1/1#3"));
          location.reload();
})
    $("#id--114").click(function(){

   $(location).attr('href', submenuhref("/1/1#4"));
          location.reload();
})
function loadSave(nr1){
    
     $.ajax({   type:"POST",
                     url:"fisiere/php/loadSaves.php",  
                     
                  success:function(result)  
                     {   
                       
            username1=result;
      if(username1!="")
            $(location).attr('href', loadHref(1,username1,vector,nr1));
            else
              $(location).attr('href', "https://infolearn.ml/index.php#/1/"+nr1+"#1");
                      }  
                
                 });
          
}