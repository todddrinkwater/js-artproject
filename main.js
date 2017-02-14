var button = document.getElementsByClassName("button");


// Add event to play sound when mouse button is held down on li.
for (var i = 0; i < button.length; i++){
  button[i].addEventListener('click', playSound);
}


function playSound() {
console.log("playSound test");

var horse = document.getElementById("horse");
horse.play();


}
/*  for (var i = 0; i < button.length; i++){
    switch(val){
      case "A":
      // play A note;
      break;

      case "Bm":
      // play Bm note;
      break;
    }

}

// if button[i].value = "A"
*/
