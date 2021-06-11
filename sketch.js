var canvas
var iss,issImage;
var spaceImage;
var spaceCraft,spaceCraftImage1,spaceCraftImage2,spaceCraftImage3,spaceCraftImage4;
var hasDocked=false;

function preload(){
  issImage=loadImage("images/iss.png");
  spaceImage=loadImage("images/spacebg.jpg");
  spaceCraftImage1=loadAnimation("images/spacecraft1.png");
  spaceCraftImage2=loadAnimation("images/spacecraft2.png");
  spaceCraftImage3=loadAnimation("images/spacecraft3.png")
  spaceCraftImage4=loadAnimation("images/spacecraft4.png")
}

function setup() {
  canvas=createCanvas(800,400);
  iss=createSprite(500,150);
  iss.addImage(issImage); 
  iss.scale=0.7;

  spaceCraft=createSprite(100,300);
  spaceCraft.addAnimation("standing",spaceCraftImage1);
  spaceCraft.scale=0.215;
}

function draw() {
  background(spaceImage); 
  //console.log(spaceCraft.x,spaceCraft.y);
  
  if(!hasDocked){
    var rand=Math.round(random(spaceCraft.x-3,spaceCraft.x+3));
    spaceCraft.x=rand;

    if(keyDown("LEFT_ARROW")){
      spaceCraft.addAnimation("left",spaceCraftImage3);
      spaceCraft.changeAnimation("left");
      spaceCraft.scale=0.215;
      spaceCraft.x-=2;
    }

    if(keyDown("RIGHT_ARROW")){
      spaceCraft.addAnimation("right",spaceCraftImage4);
      spaceCraft.changeAnimation("right");
      spaceCraft.scale=0.215;
      spaceCraft.x+=2;
    }

    if(keyDown("DOWN_ARROW")){
      spaceCraft.addAnimation("down",spaceCraftImage2);
      spaceCraft.changeAnimation("down");
      spaceCraft.scale=0.215;
    }

    if(keyDown("UP_ARROW")){
      spaceCraft.y-=2;
    }

    if(spaceCraft.x===454&&spaceCraft.y===243&&iss.x===500&&iss.y===150){
      hasDocked=true;
    }

    if(hasDocked===true){
      fill("yellow");
      textSize(20);
      text("Docking Successful!",400,350);
    }
  }
  drawSprites();
}