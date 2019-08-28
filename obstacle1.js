class Obstacle1 {
    constructor() {
     
      this.x=width/40;
      this.y= height-220;
    }

    
    setup(){

    }
    
    draw (){
    
    this.x += 4;
         if (this.x >= width) {
         this.x = 0;
         }

         BadDinoImage.position(this.x, this.y);
         BadDinoImage.position(this.x - width/7, this.y);
 
         // image(BadDino2Image, this.x, this.y, width/16, height/10);
         // image(BadDino2Image, this.x - width/2, this.y,width/16, height/10);
     
    //  BadDinoImage.position(width-this.x, height-this.y);
    }
}