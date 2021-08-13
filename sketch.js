var house1, house2, house3, house4, house5, house6, house7;
var h1, h2, h3, bg, road, r1, r2;


function preload(){
  h1 = loadImage("house1.png");
  h2 = loadImage("house2.png");
  h3 = loadImage("house3.png");
  bg = loadImage("grass.jpeg");
  r1 = loadImage("road.jpeg");
  r2 = loadImage("r2.png");
}

function setup (){
  createCanvas(displayWidth, displayHeight);

  house1 = createSprite(200, 570);
  house1.addImage(h1);

  house4 = createSprite(820, 570);
  house4.addImage(h1);

  // house2 = createSprite(800, 300);
  // house2.addImage(h2);

  house3 = createSprite(1285, 570);
  house3.addImage(h3);
  house3.scale = 0.7;

  road = createSprite(1440, 668);
  road.addImage(r2);
  //road.scale = 0.12;
}

function draw(){
  background(bg)

  drawSprites();
}