var select1;
var select2;
var select3;
function preload(){
  mainScreen = loadImage("Images/house1.jpg")
  lastImg = loadImage("Images/lastwords.jpg")
  treeImg = loadImage("Images/bg.jpeg")
}

function setup(){
  createCanvas(displayWidth,displayHeight)
  house = createSprite(width/2,height/2);
  house.addImage(mainScreen);
  house.scale = 1.2;

  lastWords = createSprite(width/2 ,height/2,300,300);
  //animations
  lastWords.addImage(lastImg);
  lastWords.scale = 0.7;

  tree = createSprite(width/2,height/2,width,height);
  tree.addImage(treeImg);
  tree.scale = 1.7

  gameState = "WAIT";

  select1 = createSprite(width/2-50,height-300,50,50);
  select1.shapeColor = "red"

  select2 = createSprite(width/2,height-300,50,50);
  select2.shapeColor = "green"

  select3 = createSprite(width/2+50,height-300,50,50);
  select3.shapeColor = "yellow"


  lastWords.visible = false;
  house.visible = false;
  select1.visible = false;
  select2.visible = false;
  select3.visible = false;
  tree.visible = false;
 
  player = createSprite(50,height-20,50,50)
  player.shapeColor = "white"
  player.visible = false

  grandma = createSprite(width-50,50,50,50)
  grandma.visible = false
  grandma.shapeColor = "red"
 
  edges = createEdgeSprites()
}


function draw(){
  
  if(gameState === "WAIT"){
    lastWords.visible = true;
    house.visible = true;50,5
    select1.visible = true;
    select2.visible = true;
    select3.visible = true;
  }

  if(mousePressedOver(select1)){
    gameState = "door";
  }
  if(mousePressedOver(select2)){
    gameState = "boat";
  }
  if(mousePressedOver(select3)){
    gameState = "heli";
  }
  
  if(gameState === "door"){
    lastWords.visible = false;
    house.visible = false;
    select1.visible = false;
    select2.visible = false;
    select3.visible = false;
    tree.visible = true;
    
    player.visible = true  
    player.bounceOff(edges)
    grandma.visible = true
    grandma.bounceOff(edges)
   
   // grandma.velocityY = random(2,5)
    if(keyDown("up")){
      player.y = player.y - 5
      player.velocityX = 0 
    }
    if(keyDown("right")){
      player.x = player.x + 5
    }
    var wall1 = createSprite(5,50,5,100);
    wall1.shapeColor="grey";
    
    var wall2 = createSprite(0,100,200,5);
    wall2.shapeColor="grey";
    
    var wall3 = createSprite(100,77,5,50);
    wall3.shapeColor="grey";
    
    var wall4 = createSprite(80,50,50,5);
    wall4.shapeColor="grey";
    
    var wall5 = createSprite(200,5,5,200);
    wall5.shapeColor="grey";
    
    var wall6 = createSprite(225,100,50,5);
    wall6.shapeColor="grey";
    
    var wall7 = createSprite(250,77,5,50);
    wall7.shapeColor="grey";
    
    var wall8 = createSprite(300,50,5,100);
    wall8.shapeColor="grey";
  
    var wall9 = createSprite(350,100,100,5);
    wall9.shapeColor="grey";
    
    var wall10 = createSprite(350,5,100,5);
    wall10.shapeColor="grey";
    
    var wall11 = createSprite(395,50,5,100);
    wall11.shapeColor="grey";
    
    var wall12 = createSprite(100,200,5,100);
    wall12.shapeColor="grey";
    
    var wall13 = createSprite(0,150,200,5);
    wall13.shapeColor="grey";
    
    var wall14 = createSprite(77,250,50,5);
    wall14.shapeColor="grey";
    
    var wall15 = createSprite(52,225,5,50);
    wall15.shapeColor="grey";
    
    var wall16 = createSprite(150,200,5,100);
    wall16.shapeColor="grey";
    
    var wall18 = createSprite(200,150,100,5);
    wall18.shapeColor="grey";
    
    var wall19 = createSprite(250,200,5,100);
    wall19.shapeColor="grey";
    
    var wall20 = createSprite(350,250,100,5);
    wall20.shapeColor="grey";
    
    var wall21 = createSprite(350,150,100,5);
    wall21.shapeColor="grey";
    
    var wall22 = createSprite(395,200,5,100);
    wall22.shapeColor="grey";
    
    var wall23 = createSprite(5,200,5,100);
    wall23.shapeColor="grey";
    
    var wall24 = createSprite(150,350,5,100);
    wall24.shapeColor="grey";
    
    var wall25 = createSprite(250,350,5,100);
    wall25.shapeColor="grey";
    
    var wall26 = createSprite(200,300,100,5);
    wall26.shapeColor="grey";
    
    grandma.velocityX = -3 
    
  }
  
  drawSprites();
  
}













