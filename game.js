class Game {

  constructor(){
    // this.Px2 = player.x;
    // this.Py2 = player.y;
    // this.BDx1 = obstacle1.x;
    // this.BDy1 = obstacle1.y;
    this.player=new Player();
    this.obstacle=[];
    let collision=0;
    // this.collid=0;//to check the colliion number
  }
    setup(){
        this.background.setup();
    }
    //if(frameCount % 300 ===0){
    //this.obstacles.push(new Obstacle1())
    //}
    //this.obstacles.forEach(obstacle=>obstacle.draw())
     // with one object
    draw(){
     // this.player.draw();
             // main timing 

            //  if (frameCount % 500 === 0){
            //   console.log("gameover")
            //   clear(); 
            //   noLoop();           
            // image(flower, 50, 50)};
            

     if (frameCount % 150 === 0){ 
      this.obstacle.push(new Obstacle1());
      }
      if (frameCount % 250===0){    // drawing obstacle 2
        this.obstacle.push(new Obstacle2());
      }

     this.obstacle.forEach((element)=>{
            element.draw();
            // if 
            if(this.collisionCheck(element, player)){
                console.log("hit");
                 element.collided = true
                 // increment score
              }
          })
        
        }
   collisionCheck(obstacle, player){
      // console.log(obstacle.x,obstacle.y,player.x,player.y)
    if (player.x + player.width <= obstacle.x ||  obstacle.x <= player.x ){
      return false;
    }
    if (player.y + player.height <= obstacle.y ||  obstacle.y + obstacle.height <= player.y){
      return false;
    }
      // debugger
    
    return true;
  }
}