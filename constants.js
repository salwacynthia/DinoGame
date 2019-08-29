const width =window.innerWidth;
const height=window.innerHeight;
let bgImage;
let flower;
let gameover;
let bird;
function preload() {
        
    bgImage=loadImage("images/background.png"); // backgroud
    stone=loadImage("images/imageedit_2_3867844160.png");
    GoodDinoImage = createImg("images/goodDino.gif");
    BadDinoImage = createImg("images/badDino1.gif");
    BadDino2Image = loadImage("images/bad-dino2.png");
    newDino=loadImage("images/newdino.png");
    gameover=loadImage("images/gameover6.png");
    bird=createImg("images/bird.gif")
  
  }





