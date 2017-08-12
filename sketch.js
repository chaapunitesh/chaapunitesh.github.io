var font,intro;
var x = 0;
var i = 0 ;
var canvas , img , img2;
var vehicles = [], projects = [] , rockets = [] ;
var points;
function preload(){
 font = loadFont('12.ttf');
 img = loadImage('l.png');
 img2 = loadImage('ufo.png');
}
function setup() {
  var w = windowWidth;
  var h = windowHeight;
  canvas = createCanvas(w,3*h);
  canvas.position(0,0);
  canvas.style('z-index',-1);
   points = font.textToPoints('Jeevan',w/8,h/1.7, w*h/2900, {
    sampleFactor: 0.1
  });
  intro = select('.intro');
  // console.log(intro.x);
  for (i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
}

function draw() {
  background(0);
  var w = windowWidth,h = windowHeight;
  for (i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
  fill(51);
  var photo = ellipse(floor(w/2),floor(h+h/4.5),floor(w/9),floor(h/4));
  // image(img ,floor(w/2),floor(h+h/4.5),floor(w/9),floor(h/4));
  for (i = 0; i < projects.length; i++) {
    var p = projects[i];
    p.show();
    p.move();
  }
  for(i = 0; i < rockets.length; i++) {
    var r = rockets[i];
    r.show();
    r.update();
    if(r.dead) rockets.splice(i,1);
  }
  console.log(rockets.length);
}
function windowResized() {
  vehicles.splice(0,vehicles.length);
  var w = windowWidth, h = windowHeight;
  resizeCanvas(w,3*h);
  points = font.textToPoints('Jeevan',w/8,h/1.7, w*h/2900, {
    sampleFactor: 0.1
  });
  for (i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    }
}

function mousePressed(){
  if(mouseY > windowHeight){
  var rok = new rocket(mouseX,mouseY,img2);
  rockets.push(rok);}
}
