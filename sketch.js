var f,m;

function setup() {
  createCanvas(1200,800);
  f=createSprite(400, 200, 50, 80);
  f.shapeColor= "purple";
  m=createSprite(200,200,80,50);
  m.shapeColor= "purple";
}

function draw() {
  background(0); 
  m.x= World.mouseX;
  m.y= World.mouseY;
  //algorithm
  if(m.x-f.x < m.width/2+ f.width/2
    && f.x-m.x < m.width/2+ f.width/2
    && m.y-f.y < m.height/2+ f.height/2
    && f.y-m.y < m.height/2+ f.height/2){
    m.shapeColor= "lime"
    f.shapeColor= "lime"
  }
  else{
    m.shapeColor= "purple"
    f.shapeColor= "purple"
  }
  drawSprites();
}