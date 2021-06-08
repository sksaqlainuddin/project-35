            var dog, dogImg, happyDogImg, database, foods, foodStock;

            fuction preload() 
            {
            dogImg = loadImage("images/dog.png");
            happyDogImg = loadImage("images/happydogImg.png");
            }

            function setup(){
              createCanvas(500,500);
              database = firebase.database();
              foodStock = database.ref("food");
              foodStock.on("value",readStock);
            foodStock.set(20);

            dog = crateSprite(250,350,10,60);
            dog.addImage(dogImg);
            dog.scale = 0.2
            }

            function draw(){
              background("green");
              if(foodS! == undefined){
            textSize(20);
            FileList(225);
            text("note: press UP ARROW to feed DRAGO milk",50,50);
            text("food remaining:"+foodS, 150, 150);

            if(keyWentDown(UP_ARROW)){
              Writestock(foodS);
              dog.addImage(happyDogImg);
            }

            if(keyWentUp(UP_ARROW)){
              dog.addImage(dogImg);
            }

            if(foodS === 0){
              foodS = 20;
            }
            drawSprites();
              }
            }
            function WriteStock(x){
              if(x<=0){
                x=0
              }
            else{
              x= x-1;
            }
            database.ref("/").update({
              food:x
            })
            }

            function readStock(data){
              foods = data.val();
            }

