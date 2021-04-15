var pacman,pacmanImage;
var ghost,ghostImage;

var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacleImage1,obstacleImage2,obstacleImage3,obstacleImage5,obstacleImage4,obstacleImage6;

function preload(){
  pacmanImage = loadAnimation("Images/Closed.png","Images/open.png");
  obstacleImage1=loadImage("Images/obstacle1.png")
  obstacleImage2=loadImage("Images/obstacle2.png")
  obstacleImage3=loadImage("Images/obstacle3.png")
  obstacleImage4=loadImage("Images/obstacle4.png")
  obstacleImage5=loadImage("Images/obstacle5.png")
  obstacleImage6=loadImage("Images/obstacle6.png")
          // ghostImage=loadImage("Images/Ghost.png")
 

}

function setup() {
  createCanvas(1280,570);
  //createSprite(400, 200, 50, 50);
  pacman = createSprite(50,60,15,15)
  pacman.addAnimation("pacman",pacmanImage)
  pacman.scale=0.5;

 

  obstacle1 = createSprite(270,350,100,50)
  obstacle1.addImage("obstacle1",obstacleImage1)
  obstacle1.scale=6.0

 
  obstacle2 = createSprite(530,360,100,50)
  obstacle2.addImage("obstacle2",obstacleImage2)
  obstacle2.scale=5.0

  obstacle3 = createSprite(660,290,1050,50) 
  obstacle3.addImage("obstacle3",obstacleImage3)
  obstacle3.scale=5.0

  obstacle4 = createSprite(900,270,100,50)
  obstacle4.addImage("obstacle4",obstacleImage4)
  obstacle4.scale=5.0

  obstacle5 = createSprite(1150,300,100,50)
  obstacle5.addImage("obstacle5",obstacleImage5)
  obstacle5.scale=2.0

 /* ghost = createSprite(650,500,100,50)
  ghost.addImage("ghost",ghostImage)
  ghost.scale=2.5*/

  

  
  
  


}


function draw() {
  background(0); 
  
  drawSprites();
  
}