var x = 550;
var y = 500;
function setup(){
createCanvas(windowWidth,windowHeight);
}

function draw(){
  background(0);
  fill(10,200,250);
  rect(x,y,40,80,50,50,0,0);
  // text('yoo',10,10);
  y=y-10;
}
