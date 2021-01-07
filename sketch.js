//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;
var dogImg;
var dogHappy;


function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png")
  dogHappy = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);



  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  dog = createSprite(200,200,20,20);
  dog.addImage("dogImg",dogImg);
  dog.scale = 0.5;
  
}


function draw() {  
  background(46, 139, 87);


  drawSprites();
  //add styles here
  fill("red")
  textSize(20);
  text("press up arrow to feed your puppy",100,400);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("dogHappy",dogHappy);
  }




}

function readStock(data){
  foodS = data.val()
}

function writeStock(x){
  if(x<=0){
    x=0;
  }

  else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}


