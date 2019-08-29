class Game {

  constructor(){
    this.Px2 = player.x;
    this.Py2 = player.y;
    this.BDx1 = obstacle1.x;
    this.BDy1 = obstacle1.y;
    
    
    // this.obstacles=[];
    
  }
    setup(){
        this.background.setup();
        
    }
    draw(){
      //if(frameCount % 300 ===0){
      //this.obstacles.push(new Obstacle1())
      //}
      //this.obstacles.forEach(obstacle=>obstacle.draw())
       // with one object
      if(this.collisionCheck(obstacle2, player)){
          console.log("hit");
           obstacle2.collided = true
         }

     
    }

    // getDistance(objectA,objectB){  //
        
    //     let X=objectA.x - objectB.x;
    //     let Y=objectA.y - objectB.y;
        
    //     return Math.sqrt(Math.pow(X,2)+Math.pow(Y,2));
    //    }

    
  collisionCheck(obstacle, player) {
      // console.log(obstacle.x,obstacle.y,player.x,player.y)
    if (
      player.x + player.width <= obstacle.x || // player's right edge is left of the left edge of the obstacle
      obstacle.x + obstacle.width <= player.x // obstacle's right edge is left of the left edge of the player
    ) {
      return false;
    }
    if (
      player.y + player.height <= obstacle.y || // player's bottom edge is top of the obstacle's top edge
      obstacle.y + obstacle.height <= player.y // obstacle's bottom edge is top of the player's top edge
    ) {
      return false;
    }
    return true;
  }

}