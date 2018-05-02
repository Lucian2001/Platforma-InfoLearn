
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
  text: "Raspunsul corect era "+x,
  icon: "error",
}); 
    
}