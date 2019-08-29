class Obstacle1 {
    constructor() {
     
      this.x=width/40;
      this.y= height-150;
      this.width =150;
      this.height=97;
      this.collided = false
    }

    
    setup(){

    }
    
    draw (){
    
    this.x += 4;
         if (this.x >= width) {
         this.x = 0;
         }


         if (!this.collided){

           BadDinoImage.position(this.x, this.y);
          //  BadDinoImage.position(this.x - width/7, this.y);
         } else {
          image(newDino, this.x, this.y, width/16, height/10);

         }
          
 
         // image(BadDino2Image, this.x, this.y, width/16, height/10);
         // image(BadDino2Image, this.x - width/2, this.y,width/16, height/10);
     
    
    }
}