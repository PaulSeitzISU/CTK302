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
    text("go go gog gog gog gog gog",width/2, height/2);
  break;
  case 1:
    
    background("blue");
    text("go go gog gog gog gog gog",width/2, height/2);
  break;
  case 2:
    background("yellow");

    text("go go gog gog gog gog gog",width/2, height/2);
  break;


}
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;
}

