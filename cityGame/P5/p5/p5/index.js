// function setup(){             // p5 will call the setup function by itself. so in this function we will initialize everything
//     console.log("p5 setup");
//     createCanvas (500,500); //p5 function cyan
//     background("cyan");   // another function of p5

//     // try to draw a circle(xPos, yPos,diameter)
//     circle(50,100,30);

//     circle(100,100,30);
//     circle(100,150,30);
//     circle(50,150,30);

//     circle(200,100,60);
//     //shape with different color
//     fill ("coral");  // fill will fill the color on the next all shapes
//     //rectangle(x,y,w,h)
//     rect(100, 200,50,50)

//     // color jodi fixed kothao dite chai we usr push and pop
//     push();
//     fill ("red");
//     rect (200,200,40,30);
//     pop ();
//     // this will not be red, will be coral
//     rect (300,200,40,30);

//     //line x1,y1,x2,y2
     strokeWeight(2);
     line(25,50,500,500);

       
    
}

//creating a new setup function to see animation
// function setup(){
//   console.log("SETUP");
//   createCanvas(500,500);
// }


// function draw(){                  //is called numerous time

//     frameRate(24); //60 times per second e eta hoy. frame rate dye dile slow hbe
//     // console.log("This is the draw function")
    
//     clear(); /// clears the whole canvas..background delete hye jaeb. so we have background after this
//     background ("cyan");
//     fill ("coral");
//     // // // circle(250,250,50);
//     // // // no animation till now
//     // // //trying to animate with mouse
//     // // //mouseX and mouseY are made available by p5..we can use them in draw function

//     // // //we want the circle to follow my mouse
//     // // circle(mouseX,mouseY,50);

//     // // /// eta animate krche but line of circle hye jacche..we need clear() function at line 47

//     // //also random x and y for circle ber krbo
//     // circle(Math.random()*500, Math.random()*500,50);  // random circle ghurche 
    
//     // every second i want a blinking square
//     if(frameCount%60===0){   // frame count counts the frame
//     rect (250,250,50,50);
//    }

//    circle(frameCount%500, 250,250);
// //   mouseIsPressed is a boolen it gives true if mouse is pressed

// //mouse press krle circle draw hcche
// if (mouseIsPressed){
//     circle(mouseX,mouseY,50)   
// }

// if (keyIsPressed) {
//     moveUpDown();
// }   
// let x=300;
// let y=300;
// function moveUpDown(){
//     if (keyCode===38){  //Up arrow
//         y-=5;
//     }else if (keyCode===40) { //down arrow er keycode is 40
//        y+=5;
//     } else if (keyCode===37){  //move rigth
//        x=-5
//     }

 
// }
// function keyPressed(){  // called once if the key is pressed

//     console.log (keyCode);
//     }

// }