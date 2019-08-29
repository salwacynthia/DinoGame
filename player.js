class Player {
  constructor() {
      this.x = 0;
      //this.y=0; // keeps track of movement
      this.gravity=0.2;
      this.velocity=0;
      this.width = 120;
      this.height= 90;
      // this.yVelocity=100;
      this.jumpCount=0;
     
    }
   
    setup(){
      this.y=height-100;
      this.move=this.y; // 
    }
    
    draw (){

      this.velocity += this.gravity;   //neg velocity, y kome player upore jay
        this.y += this.velocity;
        if (this.y >= this.move) {
          this.y = this.move;
          this.jumpCount = 0;
        }
    
        
      this.x=width-600;
      //this.y= height/3.2;
    
      GoodDinoImage.position(this.x, this.y-80);
      }
   
      jump() {
        
        
        if (keyCode === 38 && this.jumpCount < 1) {
          console.log("jump");
          this.velocity =-8;
          this.jumpCount++;
         
        }

        // if (keyCode === 37 && this.jumpCount < 2) {
        //   this.yVelocity = 8;
        //   this.jump++;
         
        // }


      }
      }


