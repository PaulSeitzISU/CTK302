let numberOfTouches ;
let i1, i2, i3;


function setup() {
  createCanvas(400, 400);
  i1 = loadImage("assets/p1.png");
  i2 = loadImage("assets/p2.jpg");
  i3 = loadImage("assets/p3.jpg");
  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
    fill("black");
      text("no one is touching the screen", 5, 22) ; 
      break ;
      
      case 1:
        background(i1);
 
        fill("black");

       text("it's kind of lonely here", 5, 22) ; 
      // put a picture here
      break ;
      
      case 2:
        background(i2);

        fill("white");

      text("two fingers are touching the screen", 5, 22) ; 
            // put a picture here
      break ;
      
      case 3:
        background(i3);

        fill("white");

     text("three are touching the screen", 5, 22) ; 
            // put a picture here
      break ;
    
      
  }
  
}