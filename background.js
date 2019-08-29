class Background {
  constructor (){
      this.xBackground=0;  // x position of the image
      // this.stone=0;
      console.log("backgorund class");
      this.stone=0;
      this.bird=0;
  }
  

  setup (){

  }

  draw(){
      // img (x,y,w,h)
      
     // image(bgImage, 0,0,width,height);
     this.bird += 3;
     bird.position(100, 50);
      this.xBackground += 3;

        if (this.xBackground >= width) {
       this.xBackground = 0;
       }

        image(bgImage, this.xBackground, 0, width, height);
        image(bgImage, this.xBackground - width, 0, width, height);

        this.stone +=3;
        if (this.stone >= width) {
          this.stone = 0;
        }
 
         image(stone, this.stone, 400, width/10, height/10);
         image(stone, this.stone - width, 400, width/10, height/4);
 
    

  }
}