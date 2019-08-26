
let background= new Background();
let player=new Player();
let obstacle= new Obstacle();



function setup (){
   let canvas=  createCanvas (width, height);
   canvas.parent("gameBoard");
    console.log("main js file");
}

function draw(){
    clear()
    background.draw();
    player.draw();
    obstacle.draw();
}