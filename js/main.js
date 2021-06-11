document.getElementById('bub1').onclick = function(event) {
    document.getElementById('bub1').style.display = "none";
}

document.getElementById('bub2').onclick = function(event) {
    document.getElementById('bub2').style.display = "none";
}

document.getElementById('bub3').onclick = function(event) {
    document.getElementById('bub3').style.display = "none";
}

document.getElementById('bub4').onclick = function(event) {
    document.getElementById('bub4').style.display = "none";
}

document.getElementById('bub5').onclick = function(event) {
    document.getElementById('bub5').style.display = "none";
}

document.getElementById('bub6').onclick = function(event) {
    document.getElementById('bub6').style.display = "none";
}

document.getElementById('bub7').onclick = function(event) {
    document.getElementById('bub7').style.display = "none";
}

document.getElementById('bub8').onclick = function(event) {
    document.getElementById('bub8').style.display = "none";
}

document.getElementById('bub9').onclick = function(event) {
    document.getElementById('bub9').style.display = "none";
}

document.getElementById('bub10').onclick = function(event) {
    document.getElementById('bub10').style.display = "none";
}


/*var bub1 = document.getElementsByClassName("x1");
var bub2 = document.getElementsByClassName("x2");
var bub3 = document.getElementsByClassName("x3");
var bub4 = document.getElementsByClassName("x4");
var bub5 = document.getElementsByClassName("x5");
var bub6 = document.getElementsByClassName("x6");
var bub7 = document.getElementsByClassName("x7");
var bub8 = document.getElementsByClassName("x8");
var bub9 = document.getElementsByClassName("x9");
var bub10 = document.getElementsByClassName("x10");


bub1.addEventListener("click", function (event){
    bub1.style.display = "none";
});

bub2.addEventListener("click", function (event){
    bub2.style.display = "none";
});

bub3.addEventListener("click", function (event){
    bub3.style.display = "none";
});

bub4.addEventListener("click", function (event){
    bub4.style.display = "none";
});

bub5.addEventListener("click", function (event){
    bub5.style.display = "none";
});

bub6.addEventListener("click", function (event){
    bub6.style.display = "none";
});

bub7.addEventListener("click", function (event){
    bub7.style.display = "none";
});

bub8.addEventListener("click", function (event){
    bub8.style.display = "none";
});

bub9.addEventListener("click", function (event){
    bub9.style.display = "none";
});

bub10.addEventListener("click", function (event){
    bub10.style.display = "none";
});
*/

/*const root = document.getElementById("app");
//getting "bubble" from HTML


console.log(innerWidth,innerHeight);

class Bubble {

constructor() {
    this.bubbleSpan = undefined;
    this.handleNewBubble();

    this.posY = this.getRandomNumber(innerHeight - 20, 20);
    this.posX = this.getRandomNumber(innerHeight -20, 20);

    this.bubbleSpan.style.top = this.posY + "px";
    this.bubbleSpan.style.left = this.posX + "px";

    this.fontSize = this.getRandomNumber(20, 50);

    this.bubbleEnd.call(this.bubbleSpan, this.getRandomNumber(10000,6000));
}

handleNewBubble () {
    this.bubbleSpan = document.createElement("span");
    this.bubbleSpan.classList.add("bubble");
    const newContent = document.createTextNode("Bubbles")
    this.bubbleSpan.appendChild(newContent);
    this.handlePosition();

    this.bubbleSpan.addEventListener("click",this.bubbleEnd);
}

handlePosition() {
    const randomY = this.getRandomNumber (60, -60);
    const randomX = this.getRandomNumber (60, -60);

    this.posY = this.getRandomNumber (innerHeight - 20, 20);
    this.posX = this.getRandomNumber (innerWidth - 20, 20);

    this.bubbleSpan.style.top = this.posY + "px";
    this.bubbleSpan.style.left = this.posX + "px";

    const randomSec = this.getRandomNumber(4000, 200);

    setTimeout(this.handlePosition.bind(this),randomSec);
}

getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

bubbleEnd(removingTime = 0){
    setTimeout(() => {
        this.classList.add('bubble--burst');
    }, removingTime === 0 ? removingTime : removingTime - 100);

    setTimeout(() => {
        this.remove();
        bubbles.push(new Bubble)
    }, removingTime)
}
}

setInterval(function () {
    new Bubble
}, 1000)
*/