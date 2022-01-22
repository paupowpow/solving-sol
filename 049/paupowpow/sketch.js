// A wall divided equally into fifteen equal parts,
// each with a different line direction and color, and all combinations.
// Red, Yellow, Blue, Black pencil

'use strict';

var tiles = 15;
var incr = 0;
var x_starts = [];
var delta = 30;
var diagonal_helper = delta * 3;
var rendering_helper = 0.5;

function setup() {
  translate(rendering_helper, rendering_helper);

  createCanvas(4961, 3508);
  background(255);
  incr = width/tiles;

  angleMode(DEGREES);
  blendMode(MULTIPLY);
  strokeCap(PROJECT);
  strokeWeight(8);

  for (var i = 0; i < tiles; i++) {
    var x_start = int(i*incr) + rendering_helper;
    x_starts.push(x_start);
    print(x_starts);
  }
  // technically this is not an x_start. make sure to iterate only 15 times
  x_starts.push(width);

  for(var i = 0; i < x_starts.length; i++) {
    if (i == 0) {
      draw_black_lines(x_starts[i], x_starts[i+1]);
    } else if (i == 1) {
      draw_yellow_lines(x_starts[i], x_starts[i+1]);
    } else if (i == 2) {
      draw_red_lines(x_starts[i], x_starts[i+1]);
    } else if (i == 3) {
      draw_blue_lines(x_starts[i], x_starts[i+1]);
    } else if (i == 4) {
      draw_black_lines(x_starts[i], x_starts[i+1]);
      draw_yellow_lines(x_starts[i], x_starts[i+1]);
    } else if (i == 5) {
      draw_black_lines(x_starts[i], x_starts[i+1]);
      draw_red_lines(x_starts[i], x_starts[i+1]);
    } else if (i == 6) {
      draw_black_lines(x_starts[i], x_starts[i+1]);
      draw_blue_lines(x_starts[i], x_starts[i+1]);
    } else if (i == 7) {
      draw_yellow_lines(x_starts[i], x_starts[i+1]);
      draw_red_lines(x_starts[i], x_starts[i+1]);
    } else if (i == 8) {
      draw_yellow_lines(x_starts[i], x_starts[i+1]);
      draw_blue_lines(x_starts[i], x_starts[i+1]);
    } else if (i == 9) {
      draw_red_lines(x_starts[i], x_starts[i+1]);
      draw_blue_lines(x_starts[i], x_starts[i+1]);
    } else if (i == 10) {
      draw_black_lines(x_starts[i], x_starts[i+1]);
      draw_yellow_lines(x_starts[i], x_starts[i+1]);
      draw_red_lines(x_starts[i], x_starts[i+1]);
    } else if (i == 11) {
      draw_black_lines(x_starts[i], x_starts[i+1]);
      draw_yellow_lines(x_starts[i], x_starts[i+1]);
      draw_blue_lines(x_starts[i], x_starts[i+1]);
    } else if (i == 12) {
      draw_black_lines(x_starts[i], x_starts[i+1]);
      draw_red_lines(x_starts[i], x_starts[i+1]);
      draw_blue_lines(x_starts[i], x_starts[i+1]);
    } else if (i == 13) {
      draw_yellow_lines(x_starts[i], x_starts[i+1]);
      draw_red_lines(x_starts[i], x_starts[i+1]);
      draw_blue_lines(x_starts[i], x_starts[i+1]);
    } else if (i == 14) {
      draw_black_lines(x_starts[i], x_starts[i+1]);
      draw_yellow_lines(x_starts[i], x_starts[i+1]);
      draw_red_lines(x_starts[i], x_starts[i+1]);
      draw_blue_lines(x_starts[i], x_starts[i+1]);
    }
  }
}

function draw() {

}

function draw_black_lines(x_start, x_end) {
  stroke(0);
  fill(0);
  var shift = 0;
  for(var i = 0; i < (x_end-x_start)/delta; i++){
    line(x_start + shift, 0, x_start + shift, height);
    shift += delta;
  }
}

function draw_yellow_lines(x_start, x_end){
  stroke(255,255,0);
  fill(255,255,0);
  var shift = 0;
  for(var i = 0; i < height/delta; i++){
    line(x_start, 0 + shift, x_end, 0 + shift);
    shift += delta;
  }
}

function draw_red_lines(x_start, x_end){
  stroke(255,0,0);
  fill(255,0,0);
  var shift = 0;
  for(var i = 0; i < height/delta + diagonal_helper; i++){
    line(x_start, 0 + shift, x_end, 0 + shift - (sin(90)*(x_end-x_start)));
    shift += delta;
  }
}

function draw_blue_lines(x_start, x_end){
  stroke(0,0,255);
  fill(0,0,255);
  var shift = 0;
  for(var i = 0; i < height/delta + diagonal_helper; i++){
    line(x_end, 0 + shift, x_start, 0 + shift - (sin(90)*(x_end-x_start)));
    shift += delta;
  }
}