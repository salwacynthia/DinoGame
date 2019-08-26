class Background {
    constructor (){
        this.xBackground=0;  // x position of the image
        console.log("backgorund class");
    }
    

    setup (){

    }

    draw(){
        // img (x,y,w,h)
        
       // image(bgImage, 0,0,width,height);
      

        this.xBackground += 3;
  
          if (this.xBackground >= width) {
         this.xBackground = 0;
         }

          image(bgImage, this.xBackground, 0, width, height);
          image(bgImage, this.xBackground - width, 0, width, height);
        // image(bgImage, this.xBackground,width, height);
        // image(bgImage, this.xBackground+width, width, height);
        
         

    }
}