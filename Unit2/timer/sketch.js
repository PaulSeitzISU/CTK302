let timer = 0;
function setup() {
  createCanvas(500, 500);

}

function draw() {
background(220);

timer++
if (timer > 5*60){
  print("beep");
  timer = 0;
}
}
