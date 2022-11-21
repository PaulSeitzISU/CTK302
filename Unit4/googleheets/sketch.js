var bubbles = [];
let url = '';

function setup() {
//1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM
   let key = '1Spk-JfMU1ySoF0Q_jE8h-h6d5P4Fh05dpDPRjszI_BE'; // this is KEY of the URL from the sheet
  
  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1" ;  // here I'm making the string for loadJSON.
  
  loadJSON(url, gotData);



  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects

function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i]["What's your name"],
                            data[i]["What do you pick up"])); // THESE Name and Shape MUST match column names in your spreadsheet!
  }

}


function draw() {
  background('blue');

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }

}


// my Bubble class
class Bubble {

  constructor(myName, myShape) {
    this.name = myName;
    this.shape = myShape;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(4, 10), 0);

  }


  display() {
    if (this.shape == "Square") {
      rect(this.pos.x, this.pos.y, 50, 50);
    } else {
      ellipse(this.pos.x, this.pos.y, 50, 50);
    }

    text(this.name, this.pos.x, this.pos.y);
  
  }

  move(){
    this.pos.add(this.vel)
    if(this.pos.x < 0 ){
this.pos =  createVector(width, this.pos.y)
    }
    if(this.pos.x > width ){
        this.pos = createVector(0, this.pos.y)
            }
            if(this.pos.y < 0 ){
                this.pos = createVector( this.pos.x, height)
                    }
                    if(this.pos.y > height ){
                        this.pos = createVector( this.pos.x, 0)
                            }

  }


}


