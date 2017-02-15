var button = document.getElementsByClassName("button");
var graphic = document.getElementById("graphic");

graphic.innerHTML = "*";

// Add event to play sound when mouse button is held down on li.
for (var i = 0; i < button.length; i++){
  button[i].addEventListener('click', getValue);
}

function getValue(){
buttonValue = this.getAttribute("data-buttonValue");
playSound();
}

function playSound() {
console.log("playSound test");

var a = document.getElementById("a");
var amin = document.getElementById("amin");
var b = document.getElementById("bmin");
var c = document.getElementById("c");
var d = document.getElementById("d");
var e = document.getElementById("e");
var emin = document.getElementById("emin");
var f = document.getElementById("f");
var g = document.getElementById("g");


  if(buttonValue === "A"){
    a.play();
    graphic.innerHTML = "A"
  }

  if(buttonValue === "Am"){
    amin.play();
    graphic.innerHTML = "Am"
  }

  if(buttonValue === "Bm"){
    b.play();
    graphic.innerHTML = "Bm"
  }

  if(buttonValue === "C"){
    c.play();
    graphic.innerHTML = "C"
  }

  if(buttonValue === "D"){
    d.play();
    graphic.innerHTML = "D"
  }

  if(buttonValue === "E"){
    e.play();
    graphic.innerHTML = "E"
  }

  if(buttonValue === "Em"){
    emin.play();
    graphic.innerHTML = "Em"
  }

  if(buttonValue === "F"){
    f.play();
    graphic.innerHTML = "F"
  }

  if(buttonValue === "G"){
    g.play();
    graphic.innerHTML = "G"
  }


}
