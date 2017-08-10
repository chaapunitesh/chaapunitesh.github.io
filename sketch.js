var font;
var canvas ;
var vehicles = [];
var points;
function preload(){
 font = loadFont('12.ttf');
}
function setup() {
  var w = windowWidth;
  var h = windowHeight;
  canvas = createCanvas(w,h);
  canvas.position(0,0);
  canvas.style('z-index',-1);
   points = font.textToPoints('Jeevan',w/8,h/1.7, w*h/2900, {
    sampleFactor: 0.1
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
  createP('hsajhajcjhass');
  createElement('h1','Hii');
}

function draw() {
  background(0);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}
function windowResized() {
  var w = windowWidth, h = windowHeight;
  resizeCanvas(w, h);
  points = font.textToPoints('Jeevan',w/8,h/1.7, w*h/2900, {
    sampleFactor: 0.1
  });
  vehicles.splice(0,vehicles.length);
  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
}
