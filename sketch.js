//game states
var play=1;
var end=0;
var gameState=1;

var sword,swordImage;

function preload(){
  
swordImage.loadImage("sword.png");  
  
 
}


function setup(){

sword=createSprite(40,200,20,20);
sword.addImage(swordImage);
sword.scale=0.7;  
  
}


function draw(){
  
//call fruit and enemy function
  
fruits();
enemy();  

}
