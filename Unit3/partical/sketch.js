let cars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);


  
}

function draw() {
  background("white");
  
        cars.push(new Car()); 

  
for(let i = 0; i < cars.length; i++){
  cars[i].display();
  cars[i].move();
  
  if(cars[i].a < 0){
    cars.splice(i,1);
  }
}
  
  fill('white') ;

  
}




class Car {

  constructor() {
    this.pos = createVector(mouseX,mouseY);
    this.vel = createVector(random(-5,5),random(10, 0))
    this.rot = random(360)
    this.r = random(225)
    this.g = random(225)
    this.b = random(225)
    this.a = random(225)

  }
  // methods

  display() {
    push();
    fill(this.r,this.g, this.b, this.a)
    translate(this.pos.x, this.pos.y);
    rotate(this.rot,createVector(this.pos.x, this.pos.y));
    this.rot + 5;
    rect(0, 0, 25, 25);
    pop();
  }

  move() {
    this.pos.add(this.vel)
    this.a -= 5;
      
    }
    
}