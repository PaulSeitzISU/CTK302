<<<<<<< HEAD
let cars = [];
let planets = []
let maxCars = 40;
let PlayerImage;
let MainmenuImage;
let BadEnding;
let GoodEnding;
let direction = 1;
let rawInput
let currentPlayer
let state = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  zeroWidth = [0,width]
  planets[0] = loadImage("assets/planet1.png")
  planets[1] = loadImage("assets/planet2.png")
  planets[2] = loadImage("assets/planet3.png")
  planets[3] = loadImage("assets/planet4.png")
  PlayerImage = loadImage("assets/player.png")
  MainmenuImage = loadImage("assets/startscreen.png")
  BadEnding = loadImage("assets/Badending.png")
  GoodEnding = loadImage("assets/goodending.png")

rawInput = createVector(0,0);
  
}

function draw() {
switch(state){
  case 0:
    imageMode(CORNER);

    background(MainmenuImage);
    break;
  case 1:
    imageMode(CENTER);

    game();
    if(currentPlayer.scale > 2000){
      state = 3;
    }
    break;
    case 2:
      imageMode(CORNER);

      background(BadEnding);

      break;
      case 3:
        imageMode(CORNER);

        background(GoodEnding);

        break;


}
  

  
}

function game(){
  if(currentPlayer == null){
    currentPlayer = new Player();
  }
  print(currentPlayer.scale)
  
    background("black");
  
    if(keyIsPressed){
      if(keyCode == 87){
        rawInput.y = -3;
        }
        else if(keyCode == 83){
        rawInput.y = 3
        }
  
  
    }   else{
      rawInput.y = 0;
    }
  
    if(keyIsPressed){
      if(keyCode == 65){
        rawInput.x = -3;
        }
        else if(keyCode == 68){
        rawInput.x = 3
        }
     
    }   else{
      rawInput.x = 0;
    }
  
    currentPlayer.display();
    currentPlayer.move();
    
    direction = round(random(0,1))
    if(direction == 0 && cars.length < maxCars){
      cars.push(new Car()); 
    }
    else if(direction == 1 && cars.length < maxCars){
      cars.push(new CarRev()); 
    }
  
    
  for(let i = 0; i < cars.length; i++){
    cars[i].display();
    cars[i].move();
    
  if(0 > cars[i].pos.x || cars[i].pos.x > width){
    cars.splice(i,1);
  
  
  
  }
  
   if((cars[i].scale)/2 + (currentPlayer.scale/2)  >  sqrt(sq(cars[i].pos.x - currentPlayer.pos.x) + sq(cars[i].pos.y - currentPlayer.pos.y)) )
   {
    if(cars[i].scale > currentPlayer.scale){
      print(currentPlayer.scale + "    " + cars[i].scale)

      state = 2;
    }


    if(cars[i].scale < currentPlayer.scale){
      print(cars[i].scale / currentPlayer.scale);
      currentPlayer.scaleincrease(cars[i].scale / currentPlayer.scale);
      cars.splice(i,1);
    }
  

   }
  
  }
}

function mouseClicked() {
  if (state == 0) {
    state = 1;
  }
  }


class Car {

  constructor() {
    this.pos = createVector(0,random(0,height));
    this.vel = createVector(random(1,5),0)
    this.scale = random(10, 100)
    this.planet = round(random(0,3))

  }
  // methods

  display() {
    image(planets[this.planet],this.pos.x,this.pos.y, this.scale, this.scale);
  }

  move() {
    this.pos.add(this.vel)
      
    }
    
} 

class CarRev {

  constructor() {
    this.pos = createVector(width,random(0,height));
    this.vel = createVector(random(-1,-5),0)
    this.scale = random(10, 100)
    this.planet = round(random(0,3))

  }
  // methods

  display() {
    image(planets[this.planet],this.pos.x,this.pos.y, this.scale, this.scale);
  }

  move() {
    this.pos.add(this.vel)
    

    }
    
    
} 

class Player {

  constructor() {
    this.pos = createVector(width/2,height/2);
    this.scale = 30;

  }
  // methods

  display() {
    image(PlayerImage,this.pos.x,this.pos.y, this.scale, this.scale);
  }

  move() {
    this.pos.add(rawInput)
      
    if(this.pos.x < 0){
      this.pos.x = 0
    }
    if(this.pos.x > width){
      this.pos.x = width
    }

    if(this.pos.y < 0){
      this.pos.y = 0
    }
    if(this.pos.y > height){
      this.pos.y = height
    }
    }
    
    scaleincrease(a){
      this.scale *= 1 + (a/10);

    }
    
} 
=======
function setup() {
  createCanvas(500, 500);
}

function draw() {

}
>>>>>>> edaf6c54acaef14f5ac37970be50519dfdd8f966
