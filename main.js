//Game Constants and Variables
let direction = {x: 0, y:0};
let foodSound = new Audio('food.mp3');
let gameOver = new Audio('gameover.mp3');
let moveSound = new Audio('move.mp3');
let musicSound = new Audio('music.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakerArr =[
    {x: 13, y: 15}
]


//Game Functions
function main(ctime){
    window.requestAnimationFrame(main);  
    console.log(ctime);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();

}

function gameEngine(){
//Part 1: Updating the snake array and Food

//Part 2: Display the snake and Food

}







//Main Logic start here
window.requestAnimationFrame(main);