class Obstacle {
    constructor() {
      this.x = 0;
      this.y = 0
    }

    
    setup(){

    }
    
    draw (){
    // image(GoodDinoImage, 0,0,width/10,height/10);
    this.x=width/5;
    this.y= height/3.2;

    // image(GoodDinoImage, width-x,height-y,width/16,height/10);
     //BadDinoImage.position( width , height+y);
     BadDinoImage.position(width-this.x, height-this.y);

    }
}