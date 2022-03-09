var bg,bgImg;
var player, shooterImg, shooter_shooting;
var gameState=0

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);
game=new Game();
form=new Form();
form.display();


}

function draw() {
  background("white"); 

if(gameState==1){
game.start();
}
drawSprites();

}
