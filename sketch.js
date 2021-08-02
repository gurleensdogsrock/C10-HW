var seaImage;
var shipImage;
var ship;
var sea;
function preload(){
shipImage = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");
  sea = createSprite(400,200);
  sea.addImage(seaImage);
  sea.velocityX = -5;
  sea.scale=0.5;
  ship = createSprite(130,200,20,20);
  ship.addAnimation("movingship",shipImage);

ship.scale=0.3;
}

function draw() {
  sea.velocityX=-3;
 if (sea.x < 0){
   sea.x = sea.width/4;
 }
 drawSprites();
}