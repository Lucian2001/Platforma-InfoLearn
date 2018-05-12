
function eroareShow(x){

    swal({
  title: "Eroare!",
  text: x,
  icon: "error",
});
}
function eroareRezultat(x){
    if(x=="multiply"){
        x="inmultire";
    } else if(x=="slash"){
        x="restul";
}
    swal({
  title: "Raspuns corect",
  text: x,
  icon: "error",
});
}
 function noTank(){window.location.replace("http://infolearnchestie-com.stackstaging.com/index.php?fisiere=inceput#/1/1#1");

   swal({
 title: "Absenta tanc",
 text: "Trebuie sa-ti creezi un tanc pentru a face aceasta aplicatie",
 icon: "error",
})
.then((value) => {
  location.reload();
});
  }
