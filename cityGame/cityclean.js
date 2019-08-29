//Collision detection and resolution
//move the mouse, the sprite responds to overlapings, collision,
//and displaces another sprite

let city, apple, cleaner;
let x, y, w, h;          // Location and size
let offsetX, offsetY;    // Mouseclick offset
let dragging = false; // Is the object being dragged?
let rollover = false; // Is the mouse over the ellipse?

class  Cityclean{

  constructor (){
    // this.x=0;
    // this.y=0;
  } 

  preload(){
    city= loadImage("images/citynew.png");
    cleaner = loadImage("images/cleaner.png");
    apple = loadImage("images/smallestapple.png");

  }
  setup() {
    
    // Starting location of the object
    // x = 300;
    // y = 250;
    // // Dimensions
    // w = 55/3;
    // h = 73/3;
    
  }
  draw(){
    image(city, 0,0, 620, 300);
    image(apple, 300,250,55/3,73/3);
    image(cleaner, mouseX,mouseY, 184/3,117/3 );
    // console.log(apple.x)
      
  // Click and Drag an object
  // Is mouse over object
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    rollover = true;
  } 
  else {
    rollover = false;
  }
  
  // Adjust location if being dragged
  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }
  
  stroke(0);
  }
mousePressed() {
  // Did I click on the rectangle?
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    offsetX = x-mouseX;
    offsetY = y-mouseY;
  }
}
mouseReleased() {
  // Quit dragging
  dragging = false;
}
}