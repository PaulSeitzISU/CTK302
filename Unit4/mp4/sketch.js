// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let temperature = 0;
let humidity = 0;
let Clouds = []
let Fog = []
var lat
var lon
let Animals = [] 
let Cat = []
let soundEffects = []
let maxAnimals = 50
let maxClouds = 5
let firstLoad = true;
let totalCats;
let totalClouds;
let fonts = [];
let sun;
let cloudPer;


navigator.geolocation.getCurrentPosition(getposition);

function getposition(position) {
    lat = position.coords.latitude
    lon = position.coords.longitude
    console.log(lat, lon)
  }

 function preload(){
  //sound effects go here
  soundEffects[0] = loadSound("assets/Sound/cat2.ogg")
  soundEffects[1] = loadSound("assets/Sound/cat3.ogg")
  soundEffects[2] = loadSound("assets/Sound/cat4.ogg")
  soundEffects[3] = loadSound("assets/Sound/dog.ogg")
  soundEffects[4] = loadSound("assets/Sound/dog2.ogg")
  soundEffects[5] = loadSound("assets/Sound/dog3.ogg")
  soundEffects[6] = loadSound("assets/Sound/maao.ogg")
  soundEffects[7] = loadSound("assets/Sound/maao2.ogg")
  soundEffects[8] = loadSound("assets/Sound/maao3.ogg")

 }

function setup() {
    createCanvas(windowWidth, windowHeight);
    Cat[0] = loadImage("assets/pet1.png")
    Cat[1] = loadImage("assets/pet2.png")
    Cat[2] = loadImage("assets/pet3.png")
    Cat[3] = loadImage("assets/pet4.png")
    Cat[4] = loadImage("assets/pet5.png")
    Cat[5] = loadImage("assets/pet6.png")
    Cat[6] = loadImage("assets/pet7.png")
    Cat[7] = loadImage("assets/pet8.png")
    Cat[8] = loadImage("assets/pet9.png")

    sun = loadImage("assets/sun.png")


    Fog[0] = loadImage("assets/cloud1.png")
    Fog[1] = loadImage("assets/cloud2.png")

    fonts[0] = loadFont("assets/Font/school.ttf")

    
  totalClouds = Clouds.length;
  totalCats = Cat.length;
print(totalCats);
print(maxClouds);
  // HERE is the call to get the weather. We build the string first.


  let myCityString = "https://api.openweathermap.org/data/2.5/weather?lat=" + str(lat) + "&lon=" + str(lon);

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US
 



 // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx
  
  let myIDString = "&appid=7686c8f7593c47436e9ad636d0dffbc6"

      
     // "appid=7686c8f7593c47436e9ad636d0dffbc6" ;

  let myTotalString = myCityString+ myIDString;
  

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.

  textAlign(CENTER)
}


function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.temp;
  cloudCover = weather.main.clouds;
  cloudPer = weather.clouds.all
maxAnimals *=  (weather.main.humidity / 100)
maxClouds *= (weather.clouds.all / 100)
//maxClouds == 50
}



function draw() {
  switch (state) {
      
    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
    textSize(16);
if(cloudPer < 80){
  background("#11b8f5");
  image(sun,0,0,width,height)
} else {
  background("lightgray");

}



      fill("black");
      text("windspeed is " + windspeed, 80, 40);
       text("temperature is " + temperature, 80, 60);
      text("humidity is " + humidity + " %", 80, 80);


      // cloud

      for (let i = 0; i < Clouds.length; i++) {
        Clouds[i].display()
        Clouds[i].move()
      }
      
      if (Clouds.length < maxClouds) {
        Clouds.push(new Cloud());
      }

      for(let i = 0; i < Animals.length; i++){
            Animals[i].display()
            Animals[i].move()
            
      }

      for(let i = 0; i < Animals.length; i++){

        
    if(0 > Animals[i].pos.y || Animals[i].pos.y > height){
      Animals[i].makeSound();
        Animals.splice(i,1);
    }
  }

      if(Animals.length >  (maxAnimals / 2)) {
        firstLoad = false;
        }

  if(Animals.length < maxAnimals && firstLoad){
    Animals.push(new FirstAnimal()); 

  } else if(Animals.length < maxAnimals){
    Animals.push(new Animal()); 

  }
  strokeWeight(4);
  stroke("white"); 
  rect(0,(height/8)*7,width,height/8)
  noStroke()
  fill("white")
  textFont(fonts[0])
  textSize(64);
  text("What is the weather in " + weather.name + "?", width/2, (height/16)*15.25);


      break;
  }
}



class FirstAnimal {

  constructor() {
    this.pos = createVector(random(0,width),random(0,height));
    this.RanPos = createVector(0,random(0,height));
    this.vel = createVector(0,random(.1,.5)* weather.wind.speed)
    this.scale = random(50, 200)
    this.CatPic = round(random(0,(totalCats -1)))
    this.ranNum = random(0,10)
    this.sound = (round(0,(soundEffects.length - 1)))

  }
  // methods

  display() {

    image(Cat[this.CatPic],this.pos.x,this.pos.y, this.scale, this.scale);
  }

  move() {
    this.pos.add(this.vel)

      
    }

  firstload(){
    this.pos.add(this.RanPos)

  }
    
  makeSound(){
    if(this.ranNum >= 3){
    soundEffects[this.sound].play();      
  }
  }
    
} 

class Animal {

    constructor() {
      this.pos = createVector(random(0,width),0);
      this.RanPos = createVector(0,random(0,height));
      this.vel = createVector(0,random(.1,.5)* weather.wind.speed)
      this.scale = random(50, 200)
      this.CatPic = round(random(0,(totalCats -1)))
      this.ranNum = random(0,10)
      this.sound = (round(random(0,(soundEffects.length - 1))))
  
    }
    // methods
  
    display() {
      image(Cat[this.CatPic],this.pos.x,this.pos.y, this.scale, this.scale);

     // image(Cat[this.CatPic],this.pos.x,this.pos.y, this.scale, this.scale);
    }
  
    move() {
      this.pos.y += this.vel.y;
        
      }

    firstload(){
      this.pos.add(this.RanPos)

    }

    makeSound(){
      if(this.ranNum >= 3){
      soundEffects[this.sound].play();      
    }
    }
      
  } 

  class Cloud {
    constructor() {
      this.pos = createVector((-50, random(0, 150)));
      this.velocity = random(.1,.5)* weather.wind.speed;
      this.scale = random(300, 500);
      this.fogPic = round(random(0, 1))
      print("cloud constructed"); 
    }
    
    display() {
      image(Fog[this.fogPic],this.pos.x,this.pos.y, this.scale, this.scale);
    }

    move() {
      //this.pos.add(this.velocity);
      this.pos.x += this.velocity;
      if (this.pos.x >= width) {
        this.pos = createVector(-100, random(0, 150));
        print("cloud loop")
      }
    }


  }

  function mouseReleased() {
    print(mouseX + ", " + mouseY);
  }
0