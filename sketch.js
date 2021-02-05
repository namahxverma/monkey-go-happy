var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var gamestate=1;
var play=1;
var end=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(80,320,1,1)
  monkey.addAnimation("n",monkey_running)
  monkey.scale=0.1;
  ground=createSprite(10,350,900,10)
  ground.velocityX=4;
 
  obstacleGroup=createGroup();
  score=0;
}


function draw() {
background("white");
  if(gamestate===play){
  stroke("blue");
  textSize(20);
  fill("black")
  survivalTime = Math.ceil(frameCount / frameRate())
  text("SurvivalTime:" + survivalTime, 100, 50)
  ground.x=ground.width/2;
  food();
    bobstacle();

  if(keyDown("space")&&monkey.y>=314){
  
  monkey.y=-1;
}
      monkey.velocityY = monkey.velocityY + 0.5
  monkey.collide(ground  )
  }
  
 if(obstacleGroup.isTouching(monkey)){
   obstacleGroup.destroyEach();
   text("gameover",150,200)
   gamestate=end;
   monkey.velocity=0;
   
 }

  drawSprites();

}
function food(){
  if (frameCount % 80 === 0) {
    banana = createSprite(600,200,40,10);
banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     banana.lifetime = 200;
    
  banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    }}

function bobstacle(){
  if (frameCount % 300 === 0) {
  obstacle = createSprite(600,330,40,10);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
    obstacle.lifetime = 200;
    
    
    obstacle.depth = banana.depth;
    monkey.depth =monkey.depth + 1;
    
  obstacleGroup.add(obstacle)
  
}
}