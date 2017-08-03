var drops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

//function ()

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
   //Letter J
   for ( i = w/900; i < w/97   ; i++) {
     for (var j = h/80; j <h/60 ; j++) {
       var r = int(random(0,2));
       text(r,i*20,j*20);
     }
   }
   for ( i = w/200 ; i < w/150 ;  i++) {
     for (var j = h/60; j <=h/38 ; j++) {
       var r = int(random(0,2));
       text(r,i*20,j*20);
     }
  }
   for ( i = w/900 ; i < w/150;  i++) {
     for (var j = h/38; j < h/ 33 ; j++) {
       var r = int(random(0,2));
       text(r,i*20,j*20);
     }
   }
// // Letter E
// for ( i = 17; i < 27   ; i++) {
//   for (var j = 9; j <12 ; j++) {
//     var r = int(random(0,2));
//     text(r,i*20,j*20);
//   }
// }
// for ( i = 17; i < 20   ; i++) {
//   for (var j = 12; j <19 ; j++) {
//     var r = int(random(0,2));
//     text(r,i*20,j*20);
//   }
// }
// for ( i = 17; i < 27   ; i++) {
//   for (var j = 19; j <22 ; j++) {
//     var r = int(random(0,2));
//     text(r,i*20,j*20);
//   }
// }
//
//   for ( i = 20; i < 23   ; i++) {
//     for (var j = 14; j <16 ; j++) {
//       var r = int(random(0,2));
//       text(r,i*20,j*20);
//     }
//   }
//   // Letter E
//   for ( i = 28; i < 38   ; i++) {
//     for (var j = 9; j <12 ; j++) {
//       var r = int(random(0,2));
//       text(r,i*20,j*20);
//     }
//   }
//   for ( i = 28; i < 31   ; i++) {
//     for (var j = 12; j <19 ; j++) {
//       var r = int(random(0,2));
//       text(r,i*20,j*20);
//     }
//   }
//   for ( i = 28; i < 38   ; i++) {
//     for (var j = 19; j <22 ; j++) {
//       var r = int(random(0,2));
//       text(r,i*20,j*20);
//     }
//   }
//
//     for ( i = 31; i < 34   ; i++) {
//       for (var j = 14; j <16 ; j++) {
//         var r = int(random(0,2));
//         text(r,i*20,j*20);
//       }
//     }

// Letter V

}
