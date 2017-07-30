var drops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  var x = mouseX;
  var w = windowWidth;
  var h = windowHeight;
  var x = random(250);
  x = map(x,0,windowWidth,0,255)
  background(0);
  stroke(0,x,x+100);
  fill(random(250),100,223);
  textSize(18);
  // for (var j = 0 ; j < 50 ; j++){
  //   for(var i =0 ; i < 100 ; i++){
  //        var r = int(random(0,2));
  //        text(r,i*20,j*20);
  //      }
  // }
   //Letter J
   for ( i = 1; i < 16   ; i++) {
     for (var j = 9; j <12 ; j++) {
       var r = int(random(0,2));
       text(r,i*20,j*20);
     }
   }
   for ( i = 7 ; i < 11 ;  i++) {
     for (var j = 12; j <19 ; j++) {
       var r = int(random(0,2));
       text(r,i*20,j*20);
     }
   }
   for ( i = 2 ; i < 11;  i++) {
     for (var j = 19; j <22 ; j++) {
       var r = int(random(0,2));
       text(r,i*20,j*20);
     }
   }

}
