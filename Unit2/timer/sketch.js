let timer = 2;
let state = 0;
let i1, i2,i3;
function setup() {
  createCanvas(500, 500);
  i1 = loadImage("assets/p1.jpg");
  i2 = loadImage("assets/p2.jpg");
  i3 = loadImage("assets/p3.jpg");
  imageMode();
  textAlign(CENTER);
}

function draw() {
background(220);



switch(state){
  case 0:

background(i1);
rect(0,0,width,height/8)
textSize(24);
text("This is Ellie",width/2,height/16)

    timer -= .01;
    if(timer < 0)
    {
    timer = 3;
    state++;
    }
  break;
  case 1:

    background(i2);
    rect(0,0,width,height/8)
    textSize(24);
    text("This is Bella",width/2,height/16)
    
    timer -= .01;
    if(timer < 0)
    {
    timer = 4;
    state++;
    }
  break;
  case 2:
    

    background(i3);
    rect(0,0,width,height/8)
    textSize(24);
    text("This is a Bidoof I draw on a public wall",width/2,height/16)
    
    timer -= .01;
    if(timer < 0)
    {
    timer = 7;
    state = 0;
    }
  break;


} 
}