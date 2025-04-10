// scripting of random numbers
var randPic1 = Math.floor(Math.random() * 6) + 1; 
var randPic2 = Math.floor(Math.random() * 6) + 1; 

//selected each pics and assign them randomly
var dice1 = document.querySelector(".img1").setAttribute("src", "./images/dice" + randPic1 + ".png")
var dice2 = document.querySelector(".img2").setAttribute("src", "./images/dice" + randPic2 + ".png")


if (randPic1 > randPic2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if (randPic1 < randPic2) {
    document.querySelector("h1").textContent = "🚩 Player 2 wins!";
} else {
    document.querySelector("h1").textContent = "draws!";
}



// alert("page is loading.............");