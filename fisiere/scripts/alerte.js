function terminareExercitiu(x){
   swal({
  title: "Bravo!",
  text: x,
  icon: "success",
});    
}

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
  title: "Ai răspuns greșit la acest exercițiu!",
  text: x,
  icon: "error",
});
}
 function noTank(){window.location.replace("https://infolearn.ml/index.php#/1/1#1");

   swal({
 title: "Absență tanc",
 text: "Trebuie să-ți creezi un tanc pentru a face această aplicație!",
 icon: "error",
})
.then((value) => {
  location.reload();
});
  }
