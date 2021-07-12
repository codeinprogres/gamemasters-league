var ground, groundImg, ground2, ground2Img, ground3, ground3img, runner, runnerImg, PLAY, END, screen1, screen2, backgroundImg1;
var backgroundImg2, backgroundImg3, obstacle1, obstacle2, obstacle3, wall1, wall2, wall3, safeGround;
var score = 0;
var gameState = PLAY;
var invisibleGround, coins, obstaclesGroup;
var wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23;
var wall24, wall25, wall26, wall27, wall28, wall29, wall20, restart, restartImg;
var door, doorAnimation;
var oceanZombie1, oceanZombie2, oceanZombie3;
var zombie1Img, zombie2Img, zombie3Img;
var parkour1, parkour2, parkour3, parkour4, parkour5;
var crown, crownImg;
var door2;
PLAY = 1;
END = 0;

function preload(){
   runnerImg = loadImage("runner.png");
   backgroundImg1 = loadImage("background1.png");
   restartImg = loadImage("restart.png");
   doorAnimation = loadImage("door 5.png");
   backgroundImg2 = loadImage("ocean.jpg");
}

function setup(){
    createCanvas(1000,900);

    door = createSprite(950, 110, 60, 60);
    door.addAnimation("opening", doorAnimation);


    runner = createSprite(150, 640, 40 ,40);
    runner.addImage(runnerImg);
    runner.scale = 0.5;
    //runner.debug = true;
    runner.setCollider("rectangle", -125,0, 200,200);
    createEdgeSprites();
    wall1 = createSprite(195, 690, 90, 10);
    wall2 = createSprite(335, 635, 90, 10);
    wall3 = createSprite(955, 510, 90, 10);
    wall3.velocityX = -20;
    wall4 = createSprite(-1,-1, 10, 10000);
    wall4.visible = false;
    wall5 = createSprite(1001, 901, 10, 10000);
    wall5.visible = false;
    wall6 = createSprite(560, -1, 10000, 10);
    wall6.visible = false;
    wall7 = createSprite(560, 901, 10000, 10);
    wall7.visible = false;
    wall8 = createSprite(45, 385, 90, 10);
    wall8.velocityX = 24;
    wall9 = createSprite(450, 280, 90, 10);
    wall9.velocityX = 27; 
    wall10 = createSprite(850, 205, 120, 5);
    safeGround = createSprite(100, 750, 110, 5);
    safeGround.visible = false;
    invisibleGround = createSprite(35, 905, 1000000, 30);
    invisibleGround.visible = false;

    restart = createSprite(450, 150, 50, 50);
    restart.addImage(restartImg);
    restart.visible = false;
    

}


function draw(){
background(backgroundImg1);
wall3.bounceOff(wall4);
wall3.bounceOff(wall5);
wall8.bounceOff(wall4);
wall8.bounceOff(wall5);
wall9.bounceOff(wall4);
wall9.bounceOff(wall5);
runner.collide(wall3);
runner.collide(wall4);
runner.collide(wall5);
runner.collide(wall8)
runner.collide(wall1);
runner.collide(wall2);
runner.collide(safeGround);
runner.collide(wall10);
if(gameState = PLAY){
    if(keyDown("space")){
        runner.y = runner.y - 15;
    }

    if(keyDown("right")){
        runner.x = runner.x + 15;
    }

    if(keyDown("left")){
        runner.x = runner.x - 15;
    }

    if(keyDown("down")){
        runner.y = runner.y + 15;
    }
    runner.y = runner.y + 7;
}

if(runner.collide(wall9)){
    runner.x = wall9.x;
}

if(runner.collide(wall3)){
    runner.x = wall3.x;
}

if(runner.collide(wall8)){
    runner.x = wall8.x;
}

if(runner.isTouching(invisibleGround)){
    gameState = END;
}

if(gameState === END){
    wall3.velocityX = 0;
    wall8.velocityX = 0;
    wall9.velocityX = 0;
    restart.visible = true;
    runner.visible = false;
}

/*if(runner.isTouching(door)){
    secondLevel();
}

if(runner.isTouching(door2)){
    thirdLevel();
}*/

if(mousePressedOver(restart)){
    reset();
}
drawSprites();
}

function reset(){
    wall3.velocityX = -20;
    wall8.velocityX = 24;
    wall9.velocityX = 27;
    restart.visible = false;
    runner.visible = true;
    runner.x = 150;
    runner.y = 640;
}

function secondLevel(){
    background(backgroundImg2);
    wall3.destroy();
    wall8.destroy();
    wall9.destroy();
    wall1.destroy();
    wall2.destroy();
    wall3.destroy();
    door.visible = false;

    
    oceanZombie1 = createSprite(30,30,30,30);

}

function thirdLevel(){

}