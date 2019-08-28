class Player {
  constructor() {
      this.x = 0;
      //this.y=0; // keeps track of movement
      this.gravity=0.2;
      this.velocity=0;
      // this.yVelocity=100;
      this.jumpCount=0;
      // this.controller = {
      //   left:false,
      //   right:false,
      //   up:false,
  
      //   }
    }
   
    setup(){
      this.y=height-100;
      this.move=this.y; // 
    }
    
    draw (){

      this.velocity += this.gravity;
        // when velocity is negative, y decreases (player goes up)
        // when velocity is positive, y increases (player goes down)
        this.y += this.velocity;
        if (this.y >= this.move) {
          this.y = this.move;
          this.jumpCount = 0;
        }
    
        
      this.x=width-600;
      //this.y= height/3.2;
    
      GoodDinoImage.position(this.x, this.y-135);
      }
   
      jump() {
        
        
        if (keyCode === 38 && this.jumpCount < 2) {
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


