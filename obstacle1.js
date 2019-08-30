class Obstacle1 {
  constructor() {
   
    this.x=width/100;
    this.y= height-250;
    this.width =150;
    this.height=97;
    this.collided = false
  }

  
  setup(){

  }
  
  draw (){
    this.x += 4;
      if (!this.collided){
      BadDinoImage.position(this.x, this.y);
      } else {
      image(newDino, this.x, this.y, width/16, height/10);
      BadDinoImage.position(width, height);
       }
  }
}