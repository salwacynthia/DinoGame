



let xStep; //determine the size of the gap between two points on the x axis
let yStep; //determine the size of the gap between two points on the y axis

var grid = []; //an array of positions where we will store each of our Vectors

function setup(){

    createCanvas (500,500); //p5 function cyan

  var numberOfColumns = 10; 
  var numberOfRows = 10; 

  var xStep = width/numberOfColumns; //to make sure they are evenly spaced
  var yStep = height/numberOfRows; //

  for(var x = 0; x < width; x += xStep){ 

    for(var y = 0; y < height; y += yStep){ 

      var p = createVector(x, y); //we create a vector at this location

      grid.push(p); // and then we put the vector into the array

    }
    console.log("xStep");
    console.log("yStep");
  }
}
console.log(xStep);
console.log(yStep);

function draw(){
  fill("red");

  for(var i = 0; i < grid.length; i++){ //go through all our positions
    rect(grid[i].x, grid[i].y,80,80); //drawing rectangle at each position
  }






}