var mic;
var vol = 0;

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background("yellow");

  let spectrum = fft.analyze();

  fill("yellow");
  beginShape();
  for(i = 0; i < spectrum.length; i++){
    vertex(i, map(spectrum[i], 0, 255, height, 0))
  }
  endShape();
  // get the sound input
  vol = mic.getLevel(); // returned level is between 0 and 1

  // text on the screen for debugging
  textSize(18);
  fill("black")
  text(
    "Click the screen first to give\npermission for mic input.\nMy volume is " +
      vol.toFixed(3),
    10,
    60
  );

  // this moves the box
  //  x = vol*200 ;
  x = map(vol, 0, 1, 0, width);
  rect(x, 200, 50, 50);


}

// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
