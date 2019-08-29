
let background= new Background();
let player=new Player();
let obstacle1= new Obstacle1();
let obstacle2= new Obstacle2();
let game=new Game;


function setup (){
   let canvas=  createCanvas (width, height);
   canvas.parent("gameBoard");
    console.log("main js file");
    player.setup();
}

function draw(){
    clear()
    background.draw();

    player.draw();
    obstacle1.draw();
    obstacle2.draw();
    game.draw();
    
}

function keyPressed() {
    player.jump();
  }

//   function collision(player, obeject){
 

//   }