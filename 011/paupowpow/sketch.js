// Wall Drawing #11 (1969)
// A wall divided horizontally and vertically into
// four equal parts. Within each part, three of the
// four kinds of lines are superimposed.

'use strict';

function setup() {
  createCanvas(1900, 1070);
  strokeCap(SQUARE);
  drawcanvas();
}

function mousePressed() {
  drawcanvas();
}

function drawcanvas() {
  background(255);

  var quadrants = ['q1', 'q2', 'q3', 'q4'];
  var linetypes = [
    ['horizontal', 13, '#000', 10],
    ['vertical', 19, '#0000ff', 5],
    ['horizontal', 41, '#ff0000', 5],
    ['vertical', 59, '#ffff00', 5]
  ];

  var skip_seed = int(random(0,4));
  for(var i = 0; i < quadrants.length; i++) {
    var current_quadrant = "q" + (i + 1);
    var skip_type = (i + skip_seed) % 4;

    for (var j = 0; j < 4; j++) {
      if (skip_type == j) {
        continue;
      }
      draw_lines_in_quadrant(current_quadrant, linetypes[j][0], linetypes[j][1], linetypes[j][2], linetypes[j][3]);
    }
  }
}

function draw_lines_in_quadrant(q, t, d, c, w) {
  stroke(c);
  strokeWeight(w);
  var a_x, a_y, b_x, b_y;

  if (t == 'horizontal'){
    for (var i = 0; i < height/2/d; i++){
      a_x = ((q == 'q1') || (q == 'q3')) ? 0 : width/2;
      a_y = ((q == 'q1') || (q == 'q2')) ? d*i : height/2+d*i;
      b_x = ((q == 'q1') || (q == 'q3')) ? width/2 : width;
      b_y = a_y;
      line(a_x, a_y, b_x, b_y);
    }
  }
  if(t == 'vertical'){
    for (var i = 0; i < width/2/d; i++){
      a_x = ((q == 'q1') || (q == 'q3')) ? d*i : width/2+d*i;
      a_y = ((q == 'q1') || (q == 'q2')) ? 0 : height/2;
      b_x = a_x;
      b_y = ((q == 'q1') || (q == 'q2')) ? height/2 : height;
      line(a_x, a_y, b_x, b_y);
    }
  }
}
