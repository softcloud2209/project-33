var s1, s2, s3, s4;
var bg;
var person1, person2;
 
function preload(){
s2 = loadImage("snow2.jpg");

}

function setup() {
  createCanvas(800,400);
 
  
}
function draw() {
 background(s2);
  var person1 = createSprite(200,380,30,80);
  var person2 = createSprite(350,380,30,100);
  if(keyDown("LEFT_ARROW")){
    person1.velocityX = person1.velocityX - 5;
    
  }
  


if (keyDown("SPACE")){
  person1.velocityY = -8;
  person2.velocityY =-10;


}
drawSprites();
}