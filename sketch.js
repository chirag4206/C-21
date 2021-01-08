var movingRect,fixedRect;
var box;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(50, 200, 50, 50);
  movingRect.shapeColor="yellow";
  movingRect.velocityX=+3;

  box=createSprite(750,200,50,50);
  box.shapeColor="green";
  box.velocityX=-3;
}

function draw() {
  background(255,255,255); 
  //movingRect.y=World.mouseY;
 // movingRect.x=World.mouseX;
  if(isTouching(movingRect,box)){
      movingRect.shapeColor="red";
      box.shapeColor="red";
  }
  else{
    movingRect.shapeColor="yellow";
    box.shapeColor="green";
  }

  bounceOff(movingRect,box);

  drawSprites();
}




