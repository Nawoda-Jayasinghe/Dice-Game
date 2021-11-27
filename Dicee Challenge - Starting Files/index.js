var randomNumber1;
randomNumber1 = Math.floor(Math.random()*6)+1;

var randomNumber2;
randomNumber2 = Math.floor(Math.random()*6)+1;;

var randomDiceImage1 ="dice"+randomNumber1+".png";
var randomDiceImage2 ="dice"+randomNumber2+".png";

var randomDiceImage1Source = "images/"+randomDiceImage1;
var randomDiceImage2Source = "images/"+randomDiceImage2;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage1Source);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2Source);

if (randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML= "Player 1 won";
else if(randomNumber2<randomNumber1)
document.querySelector("h1").innerHTML="Player 2 won";
else
document.querySelector("h1").innerHTML="Both are draw";

