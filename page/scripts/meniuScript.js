 var href1;
    var vector=[];
    // DECLARARE VECTOR CU TOATE PAGINILE
    vector[11]=0;
     vector[12]=0;
     vector[13]=0;
     vector[21]=0;
     vector[22]=0;
     vector[23]=0;
     vector[31]=0;
     vector[32]=0;
    //
    $("#operatorirelationali").click(function(){
     x=window.location.href;


     //   if (x=="http://infolearn-com.stackstaging.com/index.php"){


   
  //alert(username);
      var username1=username;
    //  username1=parseInt(username);
      id1=3;
 
      if(username1!="")
            $(location).attr('href', loadHref(1,username1,vector,id1));
            else
              $(location).attr('href', "http://infolearn-com.stackstaging.com/index.php?page=inceput#/1/3#1");
  //alert(loadHref(id1,username,vector));
      //  }

    })
    $("#inceput").click(function(){

     x=window.location.href;

      //  if (x=="http://infolearn-com.stackstaging.com/index.php"){


   
//alert(username);
      var username1;

    username1=username
      id1=1; 
      if(username1!="")
            $(location).attr('href', loadHref(1,username1,vector,id1));
            else
              $(location).attr('href', "http://infolearn-com.stackstaging.com/index.php?page=inceput#/1/1#1");
//alert(loadHref(id1,username,vector));
      //  }

    })
    $("#expresiiaritmetice").click(function(){
     x=window.location.href;


      // if (x=="http://infolearn-com.stackstaging.com/index.php"){



  //alert(username);
      var username1=username;
    //  username1=parseInt(username);
      id1=2;
 
      if(username1!="")
            $(location).attr('href', loadHref(1,username1,vector,id1));
            else
              $(location).attr('href', "http://infolearn-com.stackstaging.com/index.php?page=inceput#/1/2#1");
  //alert(loadHref(id1,username,vector));
      //  }

    })
    $("#expresiiLogice").click(function(){
     x=window.location.href;


      //  if (x=="http://infolearn-com.stackstaging.com/index.php"){


     
  //alert(username);
      var username1=username;
    //  username1=parseInt(username);
      id1=4;
 
      if(username1!="")
            $(location).attr('href', loadHref(1,username1,vector,id1));
            else
              $(location).attr('href', "http://infolearn-com.stackstaging.com/index.php?page=inceput#/1/4#1");
  //alert(loadHref(id1,username,vector));
     //   }

    })
    $(document).ready( function(){


//alert(username);
        // loadHref(id1,username);
                      })
    var meniuInceput=1;
    var id1=0;
    $("#compilator").click(function(){

        $(location).attr('href',"http://infolearn-com.stackstaging.com/index.php?page=compilator");


    })



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
