let state = 2;
let timer = 3;
let i1,i2,i3;
//eye stuff
let capture = null;
let tracker = null;
let positions = null;
let w = 0, h = 0;

let centerEye

let mic, fft;


function setup() {
  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);

  //eye stuff
  centerEye = createVector(100,100);
  w = windowWidth;
  h = windowHeight;
  capture = createCapture(VIDEO);
  createCanvas(w, h);
  capture.size(w, h);
  capture.hide();

  frameRate(10);
  colorMode(HSB);
  background(0);

  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt);

  // code for initializing mic in.
  mic = new p5.AudioIn(); 
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);

//image loading

  // i1 = loadImage("assets/Card.jpg");
  // i2 = loadImage("assets/What.jpg");
  // i3 = loadImage("assets/Doge.jpg");

  imageMode(CENTER); 
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
background(220);
textSize(24);




switch(state){
  case 0:
    fill("pink")
rect (width/2,height/2,200,200)

    fill("black")
    text("Are You There?", width/2 , height/8)

 
  break;
  case 1:
    eyeTrack();



    if( width/2 - 100 < centerEye.x && centerEye.x < width/2 + 100 && height/2 - 100 < centerEye.y && centerEye.y < height/2 + 100 ){
      fill("black")
      text("Thanks for your ATTENTION", width/2 , height/8)
      timer -= .1
      text(nfc(timer,1),width/2 , height/3)
      if(timer < 0){
        state++;
      }
    }else {
      fill("black")
      text("Please look at the Screen", width/2 , height/8)
      timer = 3;
    }

  break;

  case 2:
    spectrumLoad();



     break;
  case 3: 


  break;


}

}

function spectrumLoad(){
  stroke(51);
  let spectrum = fft.analyze();
  noFill()
  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0));
  }
  endShape();
}

function eyeTrack(){
push;
  // Flip the canvas so that we get a mirror image
	//translate(w, 0);
  //scale(-1.0, 1.0);
  // Uncomment the line below to see the webcam image (and no trail)
  //image(capture, 0, 0, w, h);
  positions = tracker.getCurrentPosition();

  if (positions.length > 0) {

    // Eye points from clmtrackr:
    // https://www.auduno.com/clmtrackr/docs/reference.html
    const eye1 = {
      outline: [23, 63, 24, 64, 25, 65, 26, 66].map(getPoint),
      center: getPoint(27),
      top: getPoint(24),
      bottom: getPoint(26)
    };
    const eye2 = {
      outline: [28, 67, 29, 68, 30, 69, 31, 70].map(getPoint),
      center: getPoint(32),
      top: getPoint(29),
      bottom: getPoint(31)
    }
    
    const irisColor = color(random(360), 80, 80, 0.4);
    drawEye(eye1, eye2);
  }
pop;
}

function getPoint(index) {
  return createVector(positions[index][0], positions[index][1]);
}

function drawEye(eye1, eye2) {
  noFill();
  stroke(255, 0.4);
  fill("black")
  centerEye = createVector((eye2.center.x - eye1.center.x)/2 + eye1.center.x,(eye2.center.y - eye1.center.y)/2 + eye1.center.y )
  text("X",centerEye.x,centerEye.y)
  testVeiwing(centerEye);
}

function testVeiwing(centerEye){
  
  fill("yellow")
  rect(width/2,height/2,50,50)


}

function mouseReleased() {
  if (state == 0 && width/2 - 100 < mouseX && mouseX < width/2 + 100 && height/2 - 100 < mouseY && mouseY < height/2 + 100){
    state++;
  }
  
  }
