function setup() {
  var w = floor(windowWidth);
  var h = floor(windowHeight);
  var canvas1 = createCanvas(w,h);
  canvas1.style('z-index','0');
  background(0);
  var i = 0 , j = 0 ;
  textSize(18);
  fill(50);
    for(j = 0 ; j*20 < h ; j++){
    for( i = 0 ; i*20 < w ; i++){
      text(floor(random(0,2)),i*20,j*20);
    }
   }
  }
function draw() {
  var w = floor(windowWidth);
  var h = floor(windowHeight);
  color(200);
  fill(0,200,250);
  textSize(floor((w*h)/9100));
  text("Hi, I am Jeevan",w/4,h/2);
}
function windowResized(){
  var w = floor(windowWidth);
  var h = floor(windowHeight);
  resizeCanvas(w, h);
  background(0);
  var i = 0 , j = 0 ;
  textSize(18);
  fill(50);
  for(j = 0 ; j*20 < h ; j++){
    for( i = 0 ; i*20 < w ; i++){
      text(floor(random(0,2)),i*20,j*20);
    }
  }

}
