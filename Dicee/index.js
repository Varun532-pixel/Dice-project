var randomNumber1=Math.floor(Math.random()*6+1);

var randomDicenumber="./images/dice"+randomNumber1+".png"

var image1=document.querySelector(".img1");

image1.setAttribute("src",randomDicenumber);


var randomNumber2=Math.floor(Math.random()*6+1);

var randomDicenumber2="./images/dice"+randomNumber2+".png"

var image2=document.querySelector(".img2");

image2.setAttribute("src",randomDicenumber2);



if (randomNumber1>randomNumber2){

    document.querySelector("h1").textContent="player 1 wins";

}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent="player 2 wins";
}else{
    document.querySelector("h1").textContent="draw";
}