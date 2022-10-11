let timer = 5;
let state = 0;
function setup() {
  createCanvas(500, 500);

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

          rect(0,0,i+j,i+j);
          rotate(1);

          translate(width/2,height/2);

          pop;
}
}

  break;
  case 3:
    

  break;
  case 4:
    

    break;
    case 5:
    

      break;
}

}

function mouseReleased() {
  state++;
  if(state > 5)
  state = 0;
}

