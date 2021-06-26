
//GESCO TEST 
//CAR LIST
//BUGATTI DIVO
//BUGATTI BOLIDE
//LAMBORGHINI VISION GT
//LAMBORGHINI CENTINARIO
//MERCEDES AMG GT
//MECEDES G WAGON
var bugattidivo,bugattibolide,tourous, wall;
var speed, weight;


function setup() {
  createCanvas(1800,820);
  
speed=random(55,90);
weight=random(400,1500);

bugattidivo = createSprite(50,200,50,50);
bugattidivo.velocityX = speed; 
bugattidivo.shapeColor="white";

bugattibolide = createSprite(50,200,50,50);
bugattibolide.velocityX = speed; 
bugattibolide.shapeColor="white";

wall = createSprite(1500,200,60,height/2);
wall.shapeColor=color(80,80,80);

}

function draw() {
  background(0); 
  
  if(wall.x-bugattidivo.x<(wall.width+bugattidivo.width)/2)
  {
    bugattidivo.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      bugattidivo.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      bugattidivo.shapeColor=color(230,230,0);
    }
    if(deformation<100)
   {
      bugattidivo.shapeColor=color(0,255,0);
   }
  }


  if(wall.x-bugattibolide.x<(wall.width+bugattibolide.width)/2)
  {
    bugattibolide.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      bugattibolide.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      bugattibolide.shapeColor=color(230,230,0);
    }
    if(deformation<100)
   {
      bugattibolide.shapeColor=color(0,255,0);
   }
  }

  drawSprites();
}