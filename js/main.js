const root = document.getElementById("app");
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
