  let box1 = document.getElementById("box1")
  let box2 = document.getElementById("box2")
  let box3 = document.getElementById("box3")
  let snd = new Audio("ding.wav");

function displayBox() {
  sizeBox(box1);
  sizeBox(box2);
  sizeBox(box3);
}

function sizeBox(box) {
  var divMaxW = window.innerWidth / 3;
  let minusWidth = divMaxW / 5;

  box.style.width = divMaxW - Math.random() * minusWidth + "px";
  box.style.height = window.innerHeight - Math.random() * 50 + "px";

  if (Math.random() >= 0.5) {
    box.style.borderRadius = "20px";
  }
  else {
    box.style.borderRadius = "0px";
  }

  let direction = [0,90,180,270]
  let randRot = chooseRand(direction);

  let position = [10,20,30,40,50,60,70,80,90]
  let randPos = chooseRand(position);


  box.style.background = `linear-gradient(${randRot}deg, blue,white ${randPos}%, black)`;


snd.play();
}

let chooseRand = function(value) {
    var choice = Math.floor(Math.random() * value.length);
    return value[choice];
}

displayBox();
window.setInterval(function(){
  displayBox();
}, 4000);
