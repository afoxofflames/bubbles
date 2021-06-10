const root = document.getElementById("bubble");
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
        bubbles.push(new Bubble())
    }, removingTime)
}
}

setInterval(function () {
    new Bubble()
}, 1000)

/*
let start = Date.now();
//remember date time

let timer = setInterval(function(){
    //how much time has passed from the start?

    let timePassed = Date.now() - start;

    if (timePassed >= 6000) {
        clearInterval(timer);//finish animation after 6 secs
        return;
    }
    //draw animation at the moment timePassed
    draw(timePassed);
}, 20);

//as timePassed goes from 0 - 6000
//y axis values go up
function draw(timePassed) {
    root.style.bottom = timePassed / 8 + 'px';
}

root.addEventListener("click", function (event){
    root.style.display = "none";
});
*/