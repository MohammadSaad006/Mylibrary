var fr,mr,rect1,rect2

function setup() {
  createCanvas(1200,800);
  
  fr=createSprite(600,400, 50, 80);
  fr.shapeColor="green"
  mr=createSprite(400,200,80,30)
  mr.shapeColor="green"
  rect1=createSprite(100,50,50,50);
  rect2=createSprite(100,350,50,50);
  rect1.shapeColor="red";
  rect2.shapeColor="blue";
  rect1.velocityY=4
  rect2.velocityY=-4
}

function draw() {
  background(0);  

mr.x=World.mouseX
 mr.y=World.mouseY 

 if(isTouching(mr,rect2)){
   mr.shapeColor="red"
   rect2.shapeColor="red"
 }
 else{
   mr.shapeColor="green"
   rect2.shapeColor="green"
 } 
  bounceOff(rect1,rect2);
  drawSprites();
}
function bounceOff(rect1,rect2){ 
if(rect1.x-rect2.x<rect1.width/2+rect2.width/2&&
rect2.x-rect1.x<rect1.width/2+rect2.width/2)
{
 rect1.velocityX=rect1.velocityX*(-1)
 rect2.velocityX=rect2.velocityX*(-1)
}
if(rect1.y-rect2.y<rect1.height/2+rect2.height/2&&
  rect2.y-rect1.y<rect1.height/2+rect2.height/2)
  {
   rect1.velocityY=rect1.velocityY*(-1)
   rect2.velocityY=rect2.velocityY*(-1)
  }
}