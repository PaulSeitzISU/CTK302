wordList = [];
tempX = 0;
tempY = 0;
numberOfWords = 2;


function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  wordList[0] = "Help";
  wordList[1] = "Stop";
  wordList[2] = "WOW";
}

function draw() {

      }
function keyPressed(){
  tempX = random(width);
  tempY = random(height);
  fill(random(255),0,0)
  ellipse(tempX,tempY, 100, 100) 
  fill("white")
  text( random(wordList), tempX,tempY)
}

