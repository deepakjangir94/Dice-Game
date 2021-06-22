var randomNumber1 = Math.floor(Math.random()*6 + 1);

var randomImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomImage;

document.querySelector(".img").setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random()*6 + 1);

var randomImage = "dice" + randomNumber2 + ".png";

var randomImageSource = "images/" + randomImage;

document.querySelector(".img").setAttribute("src", randomImageSource);


if (randomNumber1>randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw!";
}
else {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
