var jane,edges;
var dyingSound,winningSound;
function preload(){
 dyingSound = loadSound('assets/Mario Dying Sound.mp3');
 winningSound = loadSound('assets/Stage Win (Super Mario) - Sound Effect HD.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 jane = createSprite(70,70,30,30);
 jane.shapeColor = "pink";
 
 obstacle1 = createSprite(255,315,20,20);
 obstacle1.velocityY = -10;
 obstacle1.shapeColor = "black";

 obstacle2 = createSprite(680,393,20,20);
 obstacle2.velocityX = 10;
 obstacle2.shapeColor = "black";

 obstacle3 = createSprite(680,680,20,20);
 obstacle3.velocityX = -10;
 obstacle3.shapeColor = "black";

 obstacle4 = createSprite(680,536.5,20,20);
 obstacle4.velocityY = -20;
 obstacle4.shapeColor = "black";

 wall1 = createSprite(170,90,20,150);
 wall1.shapeColor = "brown";
 wall2 = createSprite(510,165,700,20);
 wall2.shapeColor = "brown";
 wall3 = createSprite(860,540,20,770);
 wall3.shapeColor = "brown";
 wall4 = createSprite(250,465,500,20);
 wall4.shapeColor = "brown";
 wall5 = createSprite(500,615,20,620);
 wall5.shapeColor = "brown";
}

function draw() {
  background("green");
  edges = createEdgeSprites();
  
  if(keyDown(LEFT_ARROW)){
    jane.x = jane.x - 10;
  }
  if(keyDown(RIGHT_ARROW)){
    jane.x = jane.x + 10;
  }
  if(keyDown(UP_ARROW)){
    jane.y = jane.y - 10;
  }
  if(keyDown(DOWN_ARROW)){
    jane.y = jane.y + 10;
  }
 
  if(jane.isTouching(obstacle1) || 
  jane.isTouching(obstacle2) || 
  jane.isTouching(obstacle3) || 
  jane.isTouching(obstacle4)){
    jane.x = 70;
    jane.y = 70;
    dyingSound.play();
  }
  
  if(jane.isTouching(wall1) || 
  jane.isTouching(wall2) || 
  jane.isTouching(wall3) || 
  jane.isTouching(wall4) || 
  jane.isTouching(wall5)){
    jane.x = 70;
    jane.y = 70;
    dyingSound.play();
  }
  
  if(jane.x === 870){
    winningSound.play();
  }

  if(jane.x > 870){
    textSize(40);
    textFont("Georgia");
    stroke(255);
    fill(0);
    text("Congratulations! You have finished this level!",1000,445);
  }

  jane.collide(edges);
  obstacle1.bounceOff(wall2);
  obstacle1.bounceOff(wall4);
  obstacle2.bounceOff(wall3);
  obstacle2.bounceOff(wall5);
  obstacle3.bounceOff(wall3);
  obstacle3.bounceOff(wall5);
  obstacle4.bounceOff(wall2);
  obstacle4.bounceOff(edges);

  textSize(20);
  fill(0);
  text(mouseX+ "," +mouseY,mouseX,mouseY);

  text("END >>",660,940)
  drawSprites();
}