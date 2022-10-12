let cars = [];
let myCar1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn one object
  for(let i = 0; i  < 100; i++){
    cars.push(new Car());
  }
  //myCar1 = new Car();
  ellipseMode(CENTER);

}

function draw() {
  background(100);
  for(let i = 0; i  < cars.length; i++){
    cars[i].display();
    cars[i].move();
  }

  // myCar.display();
  // myCar.move();
  // myCar1.display();
  // myCar1.move();
}




class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width),random(height)) ;  // initialize your attributes here
    this.vel = createVector(random(-6,6),random(-6,6))
    this.scale = createVector(random(75,100),random(25,30))

    this.color = color(random(225),random(225),random(225))
  }

  // methods

  display() {
    fill(this.color);
    rect(this.pos.x, this.pos.y, this.scale.x, this.scale.y);
    ellipse(this.pos.x + (this.scale.x/5), this.pos.y + this.scale.y, 20, 20);
    ellipse(this.pos.x + (this.scale.x/5*4), this.pos.y + this.scale.y, 20, 20);

  }

  move() {
    this.pos.add(this.vel);
    if(this.pos.x > width){
      this.pos.x = -10;
    }
    if(this.pos.x < -10){
      this.pos.x = width;
    }
    if(this.pos.y > height){
      this.pos.y = -10;
    }
    if(this.pos.y < -10){
      this.pos.y = height;
    }
  }
  
}