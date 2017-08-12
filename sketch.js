var font,intro;
var canvas , img , img2;
var vehicles = [];
var points;
function preload(){
 font = loadFont('12.ttf');
 img = loadImage('wall.jpg');
 img2 = loadImage('2.jpg');
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
  // for (var i = 0; i < points.length; i++) {
  //   var pt = points[i];
  //   var vehicle = new Vehicle(pt.x, pt.y);
  //   vehicles.push(vehicle);
  // }
}

function draw() {
  var w = windowWidth,h = windowHeight;
  background(0);
  image(img,0,0,w,h);
  image(img2,0,h,w,h);
  // for (var i = 0; i < vehicles.length; i++) {
  //   var v = vehicles[i];
  //   v.behaviors();
  //   v.update();
  //   v.show();
  // }
  fill(51);
  var photo = ellipse(floor(w/2),floor(h+h/4.5),floor(w/9),floor(h/4));
  fill(0,250,70);
  textSize(w/4);
}
function windowResized() {
  var w = windowWidth, h = windowHeight;
  resizeCanvas(w,2*h);
  background(0);
  points = font.textToPoints('Jeevan',w/8,h/1.7, w*h/2900, {
    sampleFactor: 0.1
  });
  // vehicles.splice(0,vehicles.length);
  //   for (var i = 0; i < points.length; i++) {
  //     var pt = points[i];
  //     var vehicle = new Vehicle(pt.x, pt.y);
  //     vehicles.push(vehicle);
  //   }
}
