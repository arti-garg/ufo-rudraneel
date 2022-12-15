var bgimg, bg
var player;
var life = 5;

obstaclesArr =[]
function preload() {
  bgimg = loadImage("SPACE.jpg")
  playerimg = loadImage("ufo1.png")
  obstacleimg = loadImage("obstacle.png")
  moonimg = loadImage("moon.jpg")
  dieSound = loadSound("die.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  bg = createSprite(width / 2, 0, width, height * 2)
  bg.addImage(bgimg)
  bg.velocityY = 9;

  player = createSprite(780, height - 100)
  player.addImage(playerimg)
  player.scale = 0.08



}



function draw() {
  background(200)

  if(bg.position.y>1100){
     bg.position.y = width/2
   }

  spawnObstacles();

  for (var i =0; i< obstaclesArr.length; i++){
    if (player.isTouching(obstaclesArr[i])){
      life--
     obstaclesArr[i].remove();  
      obstaclesArr.splice(i,1)
      dieSound.play();

    }

    if (life ==0){
      text("Game Over")
    }
  }
  drawSprites();

  fill ("yellow")
  textSize(20)
  text("Lives: " + life, 30, 50)
}
function keyPressed() {

  if (keyCode == 37) {
    player.velocityX = -5
  }
  if (keyCode == 39) {
    player.velocityX = 5
  }
}
function spawnObstacles() {
  console.log(frameCount)
  if (frameCount % 40 == 0) {
    obstacles = createSprite(random(20, width - 20), 0, 50, 50)
    obstacles.velocityY = 3;
    obstacles.addImage("obstacleimg", obstacleimg)
    obstacles.scale = 0.1;
    obstaclesArr.push(obstacles)
  }

  if (frameCount == 200){
    
  var moon = createSprite(random(50, width-50), random(20, 50) + 50)
  moon.addImage(moonimg)
  moon.scale =0.15
  }

}