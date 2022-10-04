let x = 0;
let v = 5;
let state = 0;
let timer = 0;


function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
}

function draw() {
background(220);

fill("yellow")
rect(width/2,height/2,200,600)

fill("grey")
ellipse(width/2,height/2 - 170,150,150)
ellipse(width/2,height/2,150,150)
ellipse(width/2,height/2 + 170,150,150)

switch (state) {

  case 0:    //green
    fill("green")
    ellipse(width/2,height/2 + 170,150,150)

    text("0", 100, 100);

    v = 10;
    break;

  case 1:    //yellow
    fill("yellow")
    ellipse(width/2,height/2,150,150)

    text("1", 100, 100);
    v = 5;
    break;

  case 2:    //red
    fill("red")
    ellipse(width/2,height/2 - 170,150,150)


    text("2", 100, 100);

    if(x > (width/2 - 10)  && x < (width/2 + 10) ){
    v = 0;

    }else{
      v = 5;
    }

    break;
}


timer++ ;
if(timer > 3*60){
  timer = 0;
  state++;
  if(state > 2){
    state = 0;
  }
}


fill("blue")
rect(x, height-75, 100, 50);
x += v;
if(x>width)
{  
  x = -5;
}

}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}