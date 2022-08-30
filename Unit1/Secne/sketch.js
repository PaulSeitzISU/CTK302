function setup() {  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
  background("lightblue");
  noStroke();

 // triangle(18, 18, 18, 360, 81, 360);
 // rect(81, 81, 63, 63);
 // quad(189, 18, 216, 18, 216, 360, 144, 360);
 // ellipse(252, 144, 72, 72);
 // triangle(288, 18, 351, 360, 288, 360);

  fill("yellow");
  arc(360, 200, 280, 280, PI, TWO_PI);
  fill("tan");
  rect(0, 200, 720, 200);
  fill("blue");
  rect(0, 200, 720, 100);

    fill("brown");
  rect(308,202,20,80);
  
  fill("rgb(116,28,28)");
  quad(288, 235, 320, 210, 402, 236, 354, 270);
  
  
  fill("rgb(170,116,77)");
  quad(288, 235 , 359, 252, 363, 315, 284, 271 );
  quad(359, 252, 363, 315, 402, 271, 402, 235 );
  fill("brown");
  rect(350,240,20,80);
  
  
  
}

function draw() {
  
}

function mouseReleased() {
    print("X " + mouseX + " , " + "Y " + mouseY )
}