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
    text("What do you all a fancy sea creature? Sofishticated",width/2, height/2);
  break;
  case 1:
    
    background("blue");
    text(" What kind of tea is sometimes hard to swallow? Reality",width/2, height/2);
  case 2:
    background("yellow");

    text("What is the definition of a farmer? Someone is good in their field.",width/2, height/2);
  break;


}
++timer;
if ( timer > 50){
  timer = 0;
  ++state;
  if (state > 2){
    state = 0;
  }
}


}
