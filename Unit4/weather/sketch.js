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
    fonts[1] = loadFont("assets/Font/lemonmilk.otf")

    
  totalClouds = Clouds.length;
  totalCats = Cat.length;
print(totalCats);
print(maxClouds);
  // HERE is the call to get the weather. We build the string first.


  let myCityString = "https://api.openweathermap.org/data/2.5/weather?lat=" + random(0,38) + "&lon=" + random(0,97);

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

  for(let j = 0;j < width;j++){
    for(let i = 0;i < height;i++){


        fill(i * windspeed / 40,j * humidity / 20,i*j * windspeed / 40 );
    triangle(10 + i *10,10 + j*10,25 + i*10,0 + j*10,25 + i*10,25 + j*10)
    }}

      fill("white");
      text("windspeed is " + windspeed, 80, 40);
       text("temperature is " + temperature, 80, 60);
      text("humidity is " + humidity + " %", 80, 80);





  strokeWeight(4);
  stroke("white"); 
  fill("black")
  rect(0,(height/8)*7,width,height/8)
  noStroke()
  fill("white")
  textFont(fonts[1])
  textSize(64);
  text("What is the weather in " + weather.name + "?", width/2, (height/16)*15.25);


      break;
  }
}
}