class Obstacle2 {
    constructor() {
     
      this.x=width/50;
      this.y= height/3.2;
    }

    
    setup(){

    }
    
    draw (){
    
    this.x += 4;
         if (this.x >= width) {
         this.x = 0;
         }
        
        
        image(BadDino2Image, this.x, this.y+250, width/16, height/10);
        image(BadDino2Image, this.x - width/2, this.y+250,width/16, height/10);
    
    //  BadDinoImage.position(width-this.x, height-this.y);
    }
}