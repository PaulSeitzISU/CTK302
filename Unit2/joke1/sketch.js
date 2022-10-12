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
    text("What did the hurricane say to the island? I've got my eye on you!",width/2, height/2);
  break;
  case 1:
    
    background("blue");
    text("What is thin, white, and scary? Homework",width/2, height/2);
  break;
  case 2:
    background("yellow");

    text("What do you call a happy cowboy? A jolly rancher",width/2, height/2);
  break;


}
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;
}

