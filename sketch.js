var m0, m1, m2, m3, m4, m5, maps;
var osc, x, y, S, z;
var playing = false;

function setup(){
  createCanvas(600, 600);
  background(0);

  m0 = loadImage("img/map1.jpg");
  m1 = loadImage("img/map2.gif");
  m2 = loadImage("img/map3.gif");
  m3 = loadImage("img/map4.jpg");
  m4 = loadImage("img/map5.jpg");
  m5 = loadImage("img/map6.jpg");

  maps = [m0, m1, m2, m3, m4, m5]

  osc = new p5.Oscillator();
    osc.setType('sine');
    osc.freq(240);
    osc.amp(0);
    osc.start();
}

function draw(){
}

// /* MOUSEPRESS PLAYS A NOTE BASED ON mouseX/mouseY COORDS + PIXEL RGB VALUES */
// function mousePressed(){
//   var S;
//   var x;
//   var y;
//   var z;
//   x = mouseX;
//   y = mouseY;
//   S = get(x, y);
//   z = red(S)+green(S)+blue(S);
//
//  // this displays the RGB & alpha values for the pixel at (mouseX, mouseY) on any mousePress
//   println("red: "+red(S)+" green "+green(S)+" blue "+blue(S)+" alpha "+alpha(S));
//   println(mouseX, mouseY);
//
// //  adjust z <= for the brightness of pixels that will trigger sound, although if it's too low
// //  any pixel will play a note, which defeats the purpose of selecting for stars only
//   if (z <= 16) {
//     star.mute();
//   }
//   else {
//     star.unmute();
//     star.playNote(x+y+z);
//   }
// }
//

function mouseClicked() {
    x = mouseX;
    y = mouseY;
    S = get(x, y);
    z = red(S)+green(S)+blue(S);

  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {
    if (!playing) {
      // ramp amplitude to 0.5 over 0.1 seconds
      osc.freq(z);
      osc.amp(0.5, 0.05);
      playing = true;
      backgroundColor = color(0,255,255);
    } else {
      // ramp amplitude to 0 over 0.5 seconds
      osc.amp(0, 0.5);
      playing = false;
      backgroundColor = color(255,0,255);
    }
  }
}

/* ANY KEYPRESS CHANGES BG IMAGE */
function keyPressed(){

  var randMap = int(random(maps.length));
  image(maps[randMap], 0, 0, 600, 600);
}
