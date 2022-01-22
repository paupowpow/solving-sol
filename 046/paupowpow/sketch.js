// Bands of lines 12 inches (30 cm) wide, in three directions (vertical, horizontal, diagonal right) intersecting.

'use strict';

var incr = 0.08;
var start = 0;

function setup() {
  createCanvas(1900, 1070);
}

function draw() {
  background(235);
  stroke(50,50,200);
  noFill();
  strokeWeight(5);

  for (var i = 0; i < 100; i++) {
    beginShape();
    var x_offset = start;
    for(var x = 0; x < width; x++){

      // var y = random(height);
      // var y = map(noise(x_offset),0,1,0,height);

      var n = map(noise(x_offset), 0, 1, (i*30), 18+(i*30));
      var s = map(sin(x_offset), -1, 1, -5, 5);
      var y = n + s;

      vertex(x, y);

      x_offset += incr;
    }
    endShape();

  }

  start += incr;

  noLoop();
}