function showHide(photosToShow, photosToHide1, photosToHide2){
  photosToShow.style.display = "block";
  photosToHide1.style.display = "none";
  photosToHide2.style.display = "none";
}

window.addEventListener("load", function(){
  var photosLimProm5 = document.getElementById("div-lima-prom5");
  var photosLimProm6 = document.getElementById("div-lima-prom6");
  var photosChilProm4 = document.getElementById("div-chile-prom4");
  var optionsList = document.getElementById("select-options-list");
  var images = document.getElementsByClassName("coder-img");
  console.log(images);

  optionsList.addEventListener("change", function(){
    if(optionsList.options[optionsList.selectedIndex].text == "5ta promoción Lima"){
      showHide(photosLimProm5, photosLimProm6, photosChilProm4);
    }else if(optionsList.options[optionsList.selectedIndex].text == "6ta promoción Lima"){
      showHide(photosLimProm6, photosLimProm5, photosChilProm4);
    }else if(optionsList.options[optionsList.selectedIndex].text == "4ta promoción Chile"){
      showHide(photosChilProm4, photosLimProm5, photosLimProm6);
    }else {
      photosLimProm5.style.display = "block";
      photosLimProm6.style.display = "block";
      photosChilProm4.style.display = "block";
    }
  });

});
