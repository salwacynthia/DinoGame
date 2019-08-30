let background= new Background();
let player=new Player();
let obstacle1= new Obstacle1();
let obstacle2= new Obstacle2();
let game=new Game;


function setup (){
   let canvas=  createCanvas (width, height);
   backgroundSound.setVolume(0.1);
   backgroundSound.play();
   canvas.parent("gameBoard");
    console.log("main js file");
    player.setup();
}

function draw(){
    clear()
    background.draw();
    player.draw();
    game.draw();
          if (frameCount % 1200 === 0){
            console.log("gameover")
            // clear(); 
            image(gameover, 100, 50, 600,400)
            noLoop();           
        };

}
    


function keyPressed() {
    player.jump();
  }

 