 let cityclean= new Cityclean();

function preload(){
    cityclean.preload();
}
function setup (){
    let canvas=  createCanvas (620, 300);
    canvas.parent("cityBoard");
     console.log("main js file");
    
 }



 function draw(){
     console.log("Draw function working? ");
    cityclean.draw();
}