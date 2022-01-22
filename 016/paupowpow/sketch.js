// Bands of lines 12 inches (30 cm) wide, in three directions (vertical, horizontal, diagonal right) intersecting.

'use strict';

function setup() {
  createCanvas(1900, 1070);
  background(230);

  angleMode(DEGREES);

  // color A
  strokeWeight(12);
  stroke(120,190,255);

  draw_v_line(random(0,1900), 10, 20);
  draw_h_line(random(0,1070), 10, 20);
  draw_dr_line(random(0,1070), 10, 20, 45);

  strokeWeight(1);

  // color C
  stroke(0);

  draw_v_line(random(0,1900), 20, 12);
  draw_h_line(random(0,1070), 20, 12);
  draw_dr_line(random(0,1070), 20, 12, 45);

  // draw_v_line(random(0,1900), 20, 12);
  // draw_h_line(random(0,1070), 20, 12);
  // draw_dr_line(random(0,1070), 20, 12, 45);

  // color B
  stroke(255);

  draw_v_line(random(0,1900), 30, 7);
  draw_h_line(random(0,1070), 30, 7);
  draw_dr_line(random(0,1070), 30, 7, 45);


}

function draw() {
}


function draw_v_line(x_start, n, d) {
  var shift = 0;
  for(var i = 0; i < n; i++){
    line(x_start + shift, 0, x_start + shift, height);
    shift += d;
  }

}

function draw_h_line(y_start, n, d) {
  var shift = 0;
  for(var i = 0; i < n; i++){
    line(0, y_start + shift, width, y_start + shift);
    shift += d;
  }
}

function draw_dr_line(y_start, n, d, a) {
  var shift = 0;
  for(var i = 0; i < n; i++){
    line(0, y_start + shift, width, y_start + shift - (sin(a)*width));
    shift += d;
  }
}