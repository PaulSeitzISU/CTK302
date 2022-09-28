let timer = 0;
let state = 0;
function setup() {
  createCanvas(500, 500);

}

function draw() {
background(220);

switch(state){
  case 0:

  break;
  case 1:
    
  break;
  case 2:
    
  break;


}
}

function mouseReleased() {
  state++;
  if(state > 2)
  state = 0;
}

