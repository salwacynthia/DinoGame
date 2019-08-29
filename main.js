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
    game.draw();
          if (frameCount % 500 === 0){
            console.log("gameover")
            // clear(); 
            // noLoop();           
            image(flower, 50, 50)};



}
    


function keyPressed() {
    player.jump();
  }

//   function collision(player, obeject){
 

//   }