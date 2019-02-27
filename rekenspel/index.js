const wrapper = document.getElementById("wrapper");
const myAssignment = document.getElementById("myAssignment");
const myAnswer = document.getElementById("myAnswer");
const feedback = document.getElementById("feedback");
const opgave = document.getElementById("score");
const goed = document.getElementById("goed");
const fout = document.getElementById("fout");
const firstNum = document.querySelector('.first');
const secondNum = document.querySelector('.second');

let mySum;
let sound = new Audio();
let opgv = 0;
let goer = 0;
let four = 0;
let looped = 0;

function shuffle() {
  if (looped >= 5) {
    makeSum();
    looped = 0;
  } else {
    looped++;
    makeSum();
    window.setTimeout(shuffle, 100);
  }
}

function makeSum() {
  var a = Math.floor(Math.random() * 9 + 1);
  var b = Math.floor(Math.random() * 9 + 1);
  mySum = a + " * " + b;
  sumDisplay = a + " x " + b;
  // myAssignment.innerHTML = sumDisplay;
  let
      red = Math.floor(Math.random() * 255),
      green = Math.floor(Math.random() * 255),
      blue = Math.floor(Math.random() * 255);

  firstNum.style.color = "rgb(" + red + "," + green + "," + blue + ")";
  secondNum.style.color = "rgb(" + green + "," + blue +  "," + red + ")";
  firstNum.innerHTML = a;
  secondNum.innerHTML = b;

  myAnswer.focus();
}

function keyPressed(evt) {
  if (evt.keyCode == 13) {
    opgv++;
    opgave.innerHTML = "opgaven: " + opgv;
    if (eval(mySum) == myAnswer.value) {
      feedback.src = "img/goed.png";
      sound.src = "img/Correct-answer.mp3";
      sound.play();
      goer++;
      goed.innerHTML = "Goed: " + goer;
    } else {
      feedback.src = "img/fout.png";
      sound.src = "img/Wrong-answer-sound-effect.mp3";
      sound.play();
      four++;
      fout.innerHTML = "Fout: " + four;
    }
    window.setTimeout(waiting, 2000);
  }
}

function waiting() {
  feedback.src = "img/feedback.png";
  myAnswer.value = "";
  shuffle();
}
shuffle();
var randomColor = Math.floor(Math.random() * 16777215).toString(16);
myAnswer.addEventListener("keydown", keyPressed, false);
