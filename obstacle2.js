class Obstacle2 {
  constructor() {
   
    this.x=width/40;
    // this.y= 310;
    this.width = 512/16
    this.height = 340/10
    this.collided = false
  }

  
  setup(){

  }
  
  draw (){
  
  this.x += 3;
       
      if(!this.collided){
        image(BadDino2Image, this.x, 350, width/16, height/10);
        // image(BadDino2Image, this.x - width, 310,width/16, height/10);
      }else{
        image(newDino, this.x, 350, width/16, height/10);
        // image(newDino, this.x - width, 310,width/16, height/10);
      }
     
  
  //  BadDinoImage.position(width-this.x, height-this.y);
  }
}