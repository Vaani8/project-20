var car , wall ;
var speed , weight ;

function setup() {
  createCanvas(1600,400);

 car=createSprite(500,200,50,50);
 car.shapeColor="pink";
 car.velocityX=3;

 wall=createSprite(1050,200,60,height/2);
 wall.shapeColor=color(80,80,80);
}

function draw() {
  background("blue");  
  if (isTouching(car,wall)){
    car.shapeColor="orange"
    car.velocityX=0;
  }
  drawSprites();
}