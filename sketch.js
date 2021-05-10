const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var snow;
var background,backgroundImg;
var bg;
var maxDrops = 100;
var particles1 = [];
var particles2 = [];
var man,manImg;
var ground;

function preload(){
backgroundImg = loadImage("snow2.jpg");
manImg = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png",
        "Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png",
        "Walking Frame/walking_8.png");
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world

man = createSprite(50,370,40,40);
man.addAnimation("walking",manImg);
man.scale=0.2;
  
ground = createSprite(400,380,800,20);
ground.visible=false;

  //snow = new Snow(400, 50);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine)

if(keyCode === 32){
  man.velocityY = -4;
}

man.velocityY = man.velocityY = 0.8;

man.collide(ground);


  if(frameCount%10===0){
    particles1.push(new Particle1(random(100,700),40,40,40));
    }
  for(var j=0;j<particles1.length;j++){
  particles1[j].display();
  }

  if(frameCount%15===0){
    particles2.push(new Particle2(random(50,750),40,45,45));
    }
  for(var j=0;j<particles2.length;j++){
  particles2[j].display();
  }
  
 //snow.display();
  //createSnow(); 
  drawSprites();
}

/*function createSnow(){
  if(frameCount %30 === 0){
    snows.push(new Snow(random(100,700)))
    lifetime=100;
  }
  for (var i = 0; i<snows.length; i++){
    snows[i].display();
  }
}*/