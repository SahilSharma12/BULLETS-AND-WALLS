var bullet, wall;
var speed, weight,thickness;

function setup() {
  createCanvas(1400,400);

  speed=random(20,31)
  weight=random(30,52)
  thickness = random(22,83)

  bullet=createSprite(50, 200, 25, 10);
  bullet.velocityX= speed;
  bullet.shapeColor=color(255);

  wall=createSprite(1300, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background(0); 

 if(wall.x-bullet.x<(bullet.width+wall.width)/2){
bullet.velocityX=0;
var damage=0.5 * width * speed * speed/52306;

if(damage>12.43){
bullet.shapeColor=color(255,0,0);
wall.visible = false;
}

if(damage<12.43 && damage>3.68){
  bullet.shapeColor=color(230,230,0);
}

if(damage<3.68){
  bullet.shapeColor=color(0,255,0);
  bullet.visible = false
}

}

  drawSprites();
}