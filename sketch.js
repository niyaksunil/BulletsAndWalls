// creating the variables
var bullet ,speed , weight, collided;
var wall , thickness;

// creating the setup function
function setup() {
  createCanvas(1400,400);
  height = canvas.height;

// setting random speed and weight
  speed = random(223 ,321);
  weight = random(30, 52);
  thickness = random(22 ,83);

// creating the wall sprite
  wall = createSprite(1200 ,200, thickness , height/2);
  wall.shapeColor = color(80,80,80);
  
  bullet = createSprite(0, 200, 25, 15);
  bullet.shapeColor = color(50,100,200);
  
}

function draw() {
  // creating the background
  background(100 , 20 ,40);  
  bullet.velocityX = speed/10;

  fill("white");
  textSize(30);

  collided = hasCollided(bullet,wall);

  if(collided){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed* speed/(thickness* thickness *thickness);
    
      if (damage > 10){
        wall.shapeColor = color(255 , 0 ,0);
        text("damage value : " + round(damage), 920 ,37);
      }

      if(damage<10){
        wall.shapeColor = color (0 , 255 , 0);
        text("damage value : " + round(damage), 920 ,37);
      }
  }
  // the deformation above 180 
  // if(wall.x - car .x < (car . width + wall. width)/2){
  //   car.velocityX = 0;
  //   var deformation = 0.5 * weight * speed * speed/22509;
  //   if(deformation>180){
  //     car.shapeColor = color(250 ,0,0);
  //     text("grade : D-" ,950,35 );
  //     text("deformation value :" + round(deformation), 950 ,65);
  //   }

  //   // the deformation below 180 and above 100
  //   if(deformation<180 && deformation >100){
  //     car.shapeColor = color(230 , 230 ,0);
  //     text("grade : B-" ,950,35 );
  //     text("deformation value :" + round(deformation), 950 ,65);
  //   }

  //   // the deformation below 100 
  //   if(deformation < 100){
  //     car.shapeColor = color(0 , 255 ,0);
  //     text("grade : A+" ,950,35 );
  //     text("deformation value :" + round(deformation), 950 ,65);
  //   }

  // }
  drawSprites();
}

function hasCollided(lbullet, lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
  return false
}
