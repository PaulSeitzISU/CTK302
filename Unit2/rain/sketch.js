let raindrops = [];
let myCar1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn one object
  for(let i = 0; i  < 100; i++){
    raindrops.push(new Rain());
  }
  //myCar1 = new Car();
  ellipseMode(CENTER);

}

function draw() {
  background(100);
  for(let i = 0; i  < raindrops.length; i++){
    raindrops[i].display();
    raindrops[i].move();
  }

  // myCar.display();
  // myCar.move();
  // myCar1.display();
  // myCar1.move();
}




class Rain {

  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width),random(height)) ;  // initialize your attributes here
    this.vel = createVector(random(-6,1),random(6,1))
    this.scale = random(12,60)

    this.color = color(0,0,random(40,225))
  }

  // methods

  display() {
    fill(this.color);
    textSize(this.scale)
    text("rain",this.pos.x,this.pos.y)

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