let timer = 0;
let state = 0;
function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {

switch(state){
  case 0:
    background("red");
    text("What did the egg say to the frying pan? You crack me up",width/2, height/2);
  break;
  case 1:
    
    background("blue");
    text("How do bulls write? With a bullpen.",width/2, height/2);
  break;
  case 2:
    background("yellow");

    text("How do you get an alien baby to sleep? You rocket",width/2, height/2);
  break;
}

rect(100,100,100,100);
}

function mouseReleased() {

if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200){
  state++;
  if (state > 2) state = 0;
}

}

