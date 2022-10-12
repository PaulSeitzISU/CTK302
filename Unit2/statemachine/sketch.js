let timer = 5;
let state = 0;
function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);

}

function draw() {
background(220);



switch(state){
  case 0:
    for(let j = 0;j < 100;j++){
      for(let i = 100;i > 0;i--){
          fill('red');
          rect(i*40,j*40,i+j,i+j);
}
}
  break;
  case 1:
    for(let j = 0;j < 100;j++){
      for(let i = 100;i > 0;i--){


          fill(i * 2,j * 2,i*j);
      triangle(0 + i *10,0 + j*10,25 + i*10,0 + j*10,25 + i*10,25 + j*10)
      }}
  break;

  case 2:
    for(let j = 0;j < 100;j++){
      for(let i = 100;i > 0;i--){
          fill('red');
          push;

          rect(width/2,height/2,i+j,i+j);
          axis = createVector(width/2,height/2)
          rotate(1/2);

         // translate(width/2,height/2);

          pop;
}
}

  break;
  case 3: 
 for(let j = 0;j < 225;j = j += 2.25){
    for(let i = 100;i > 0 ;i--){
        fill(0,0,random(0,j))
ellipse(width/2,height/2,i*10,i*10);
}
}

  break;
  case 4:
    for (var j = 0; j < height; j += 25)
    for (var i = 0; i < width; i += 25) {
      fill(random(.5)*i, random(.5) * j, random(.15)*i*j);
      ellipse(i, j, 20, 20);
    }

    break;
    case 5:
      for (var j = 0; j < height; j += 25){
      for (var i = 0; i < width; i += 25) {
        fill(0, random(.5) * j, random(.05)*i);
        rect(i, j, 20, 20);
      }
    }
      break;
}

}

function mouseReleased() {
  state++;
  if(state > 5){
    state = 0;
  }
}

