let state = 0;
let timer = 3;
let x = 0;
let i1,i2,i3;
const letters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`

//eye stuff
let capture = null;
let tracker = null;
let positions = null;
let w = 0, h = 0;

let centerEye

let mic, fft;

let letterArry = [];


function setup() {

  for(let i = 0; i  < 200; i++){
    letterArry.push(new Letter());
  }

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

   i1 = loadImage("assets/HYPNO.png");
   i2 = loadImage("assets/blue.jpg");
  // i3 = loadImage("assets/Doge.jpg");

  imageMode(CENTER); 
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
textSize(24);




switch(state){
  case 0:
    background(220);

    fill("pink")
rect (width/2,height/2,200,200)
fill("black")
text("Yes!!",width/2,height/2)
    fill("black")
    text("Are You There?", width/2 , height/8)

 
  break;
  case 1:
    background(220);

  eyeTrack();



    if( width/2 - 100 < centerEye.x && centerEye.x < width/2 + 100 && height/2 - 100 < centerEye.y && centerEye.y < height/2 + 100 ){
      fill("black")
      text("Thanks for your ATTENTION", width/2 , height/8)
      timer -= .1
      text(nfc(timer,1),width/2 , height/3)
      if(timer < 0){
        state++;
        timer = 3;
      }
    }else {
      fill("black")
      text("Please look at the Screen", width/2 , height/8)
      timer = 3;
    }

  break;

  case 2:
    background(220);


  fill("black")
    text("Gathering Audio Sample", width/2 , height/8)
    spectrumLoad();
    timer -= .1
    if(timer < 0){
      state++;
      timer = 3;
    }


     break;
  case 3: 

for(let i = 0; i  < letterArry.length; i++){
  letterArry[i].display();
  letterArry[i].move();
}


    // for(let j = 0;j < 100;j++){
    //   for(let i = 100;i > 0;i--){
    //     const rand = int(random(0, letters.length-1));
    //       fill('green');
    //       text(letters[rand],i*40,j*40)
    //     }}

        timer -= .1
        if(timer < 0){
          state++;
          timer = 5;
        }

  break;
case 4:
  if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
  image(i2,width/2,height/2,windowWidth,windowHeight)    
  timer -= .1

  if(timer < 0){
      state = 0;
      timer = 3;

    }
break;

}

}


class Letter {

  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width) * 30,random(height)* 10) ;  // initialize your attributes here
    this.vel = createVector(0,random(6,1))
    this.color = color(0,random(40,200),0)
    this.lran = int(random(0, letters.length-1));
    this.scale = random(12,60)


  }

  // methods

  display() {
    fill("black");
    textSize(this.scale + 5)
    text(letters[this.lran],this.pos.x,this.pos.y)
    fill(this.color);
    textSize(this.scale)
    text(letters[this.lran],this.pos.x,this.pos.y)

  }

  move() {
    this.pos.add(this.vel);
    if(this.pos.x > width){
      this.pos.x = -10;
    }
    if(this.pos.x < -10){
      this.pos.x = width;
    }
    if(this.pos.y > height){
      this.pos.y = -10;
    }
    if(this.pos.y < -10){
      this.pos.y = height;
    }
  }
  
}


function spectrumLoad(){
  stroke(51);
  noFill();
  let spectrum = fft.analyze();

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
  image(i1,width/2,height/2, 200, 200);
 

  noFill();
  stroke(255, 0.4);
  fill("red")
  centerEye = createVector((eye2.center.x - eye1.center.x)/2 + eye1.center.x,(eye2.center.y - eye1.center.y)/2 + eye1.center.y )
  text("X",centerEye.x,centerEye.y)

}

function mouseReleased() {
  if (state == 0 && width/2 - 100 < mouseX && mouseX < width/2 + 100 && height/2 - 100 < mouseY && mouseY < height/2 + 100){
    state++;
  }
  
  }
