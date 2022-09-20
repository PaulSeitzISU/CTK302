let x1 = 2,x2 = 1,x3 = 3;
let speed1 = 1,speed2 = 1,speed3 = 1;
let f1, f2, f3;




function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/lemonmilk.otf");
  f2 = loadFont("assets/Academy.ttf");
  f3 = loadFont("assets/Legothick.ttf");
  textAlign(CENTER);
}

function draw() {
  background(100);
  push;
  fill("white");
  textSize(128);
  textFont(f1, 48);
  text("word or phrase", x1, 100);
  pop;

  push;
  fill("white");
  textSize(128);
  textFont(f1, 48);
  text("word or phrase", x2, 250);
  pop;

  push;
  fill("white");
  textSize(128);
  textFont(f1, 48);
  text("word or phrase", x3, 400);
  pop;

  x1 += 2.5 * speed1;
  if(x1 > width + 400){
    x1 = -400 + random(0,-400);
    speed1 = random(1,4);
  }

  x2 += 2.5 * speed2;
  if(x2 > width + 400){
    x2 = -400 + random(0,-400);
    speed2 = random(1,4);
  }

  x3 += 2.5 * speed3;
  if(x3 > width + 400){
    x3 = -400 + random(0,-400);
    speed3 = random(1,4);
  }
 
}
