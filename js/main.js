var bubble = document.getElementById("bubble");
//getting "bubble" from HTML


console.log(broswerWidth,browserHeight);

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

function makeBubble() {
    this.bubbleSpan = undefined;
    this.handleNewBubble();

    this.posY = this.getRandomNumber(innerHeight - 20, 20);
    this.posX = this.getRandomNumber(innerHeight -20, 20);

    this.bubbleSpan.style.top = this.posY + "px";
    this.bubbleSpan.style.left = this.posX + "px";

    this.fontSize = this.getRandomNumber(20, 50);

    this.bubbleEnd.call(this.bubbleSpan, this.getRandomNumber(10000,6000));
}

function handleNewBubble () {
    this.bubbleSpan = document.createElement
}





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
    bubble.style.bottom = timePassed / 8 + 'px';
}

bubble.addEventListener("click", function (event){
    bubble.style.display = "none";
});
