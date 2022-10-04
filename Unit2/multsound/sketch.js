let s1, s2, s3;

let state = -1;
function setup() {
  createCanvas(800, 800);

}

function preload () {
  s1 = loadSound("assets/playinggod.mp3");
  s2 = loadSound("assets/dreams.mp3");
  s3 = loadSound("assets/hey.mp3");


}

function draw() {
background(220);
switch (state){
  case -1:
    text("please click", 400, 400)
    break;
  case 0:
    if (!s1.isPlaying())
    {
        s1.play();
    }
  break;
  case 1:
    if (!s2.isPlaying())
    {
        s2.play();
    }
  break;
  case 2:
    if (!s3.isPlaying())
    {
        s3.play();
    }
  break;
      
}
}

function mouseReleased()
{
s1.stop();
s2.stop();
s3.stop();
state++
if(state>2){
  state = 0;
}

}