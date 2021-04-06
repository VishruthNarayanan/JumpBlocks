var fixSprite1, fixSprite2, fixSprite3, fixSprite4;
var movingSprite;
var music,music2

function preload(){
music=loadSound("music.mp3");
music2 = loadSound("kalki-mass-bgm-lion-king [ Ringtonebgm.com] (1).mp3")
}

function setup(){
    
    createCanvas(800,600);

    

    movingSprite=createSprite(random(10,750),300,20,20);
    movingSprite.shapeColor="white";
    movingSprite.velocityX=3;
    movingSprite.velocityY=3;

   
    fixSprite1=createSprite(100,590,180,20);
    fixSprite1.shapeColor="red";

    fixSprite2=createSprite(300,590,180,20);
    fixSprite2.shapeColor="green";

    fixSprite3=createSprite(500,590,180,20);
    fixSprite3.shapeColor="blue";

    fixSprite4=createSprite(700,590,180,20);
    fixSprite4.shapeColor="yellow";

    

}

function draw() {
    background(rgb(10,10,10));
   
    if(movingSprite.x<0){
      music.stop()
        movingSprite.velocityX=3
    }else if(movingSprite.x>800){
      music.stop()
        movingSprite.velocityX=-3
    }
   
  if(movingSprite.isTouching(fixSprite4)){
    music.play()
    movingSprite.shapeColor="yellow";
    movingSprite.bounceOff(fixSprite4)
    
  }
  
  else if(movingSprite.isTouching(fixSprite3)){
    music.play()
    movingSprite.shapeColor="blue";
    movingSprite.bounceOff(fixSprite3)
   
  }
    
  else if(movingSprite.isTouching(fixSprite2)){
    music.stop()
    movingSprite.shapeColor="green";
    movingSprite.bounceOff(fixSprite2)
    movingSprite.velocityX=0;
    movingSprite.velocityY=0;
    music2.play()

  }
  
  else if(movingSprite.isTouching(fixSprite1)){
    music.play()
    movingSprite.shapeColor="red";
    movingSprite.bounceOff(fixSprite1)
  }

  if (movingSprite.y<0){
    music.stop()
    movingSprite.velocityY=3
  }

  
   
    drawSprites()
}

