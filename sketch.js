  //creating global variables 
  var monkey , monkey_running
  var banana ,bananaImage, obstacle, obstacleImage
  var FoodGroup, obstacleGroup
  var score
  var survivalTime=0;

function preload(){
  
  //loading animation for monkey
  monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png  ","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  //loading images
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {  
  createCanvas(400,400);
  
  //creating monkey
  monkey=createSprite(40,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  //creating ground
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
 
}

function draw() {
  //creating background
  background("white");
  
  //creating infinite rolling ground
   if (ground.x < 0){
   ground.x = ground.width/2;
  }
   
  //making the monkey jump
  if(keyDown("space")){
    monkey.velocityY=-7;
  }
  
  //giving gravity so that it does not fal
  monkey.velocityY=monkey.velocityY+0.8;
  
  //making monkey collide with the ground so that it does not fall
  monkey.collide(ground);
  
  //calling functions
  spawnfood();
  spawnobstacles();
  
  //adding score
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score, 500,50);
  
  //giving survival time 
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime, 100,50);
 
  
  //drawing all the sprites created
  drawSprites();
}

  //function spawn food 
function spawnfood(){
  if(frameCount%80===0){
    banana=createSprite(200,200,10,10);
    banana.addImage(bananaImage);
    banana.y=Math.round(random(120,200));
    banana.scale=0.1;
    banana.velocityX=-4;             
  }
}
  
  //function spawn obstacles 
  function spawnobstacles(){
   if(frameCount%300===0){
    obstacle=createSprite(200,200,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.y=Math.round(random(300,325));
    obstacle.velocityX=-4;
    obstacle.scale=0.2;
      
    }   
}




