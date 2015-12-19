var numSegments = 14,
  x = [],
  y = [],
  x2 = [],
  y2 = [],
  x3 = [],
  y3 = [],
  angle = [],
  segLength = 26,
  targetX, targetY;

for (var i = 0; i < numSegments; i++) {
  x[i] = 0;
  y[i] = 0;
  x2[i] = 0;
  y2[i] = 0;
  x3[i] = 0;
  y3[i] = 0;
  angle[i] = 0;
}

function setup() {
  createCanvas(710, 400);
  strokeWeight(20);
  stroke(255, 100);
  noFill();

  x[x.length-1] = width/2; 
  y[x.length-1] = height;  
  x2[x.length-1] = width/4; 
  y2[x.length-1] = height;
  x3[x.length-1] = 3*width/4; 
  y3[x.length-1] = height;
}

function draw() {
  background(0);
  strokeWeight(20);

  reachSegment(0, mouseX, mouseY);
  for(var i=1; i<numSegments; i++) {
    reachSegment(i, targetX, targetY);
  }
  for(var j=x.length-1; j>=1; j--) {
    positionSegment(j, j-1);
  }
  for(var k=0; k<x.length; k++) {
    segment(x[k], y[k], angle[k], (k+1)*2);
    segment(x2[k], y2[k], angle[k], (k+1)*2);
    segment(x3[k], y3[k], angle[k], (k+1)*2);
  }
}

function positionSegment(a, b) {
  x[b] = x[a] + cos(angle[a]) * segLength;
  y[b] = y[a] + sin(angle[a]) * segLength;
  x2[b] = x2[a] + cos(angle[a]) * segLength;
  y2[b] = y2[a] + sin(angle[a]) * segLength;
  x3[b] = x3[a] + cos(angle[a]) * segLength;
  y3[b] = y3[a] + sin(angle[a]) * segLength;
}

function reachSegment(i, xin, yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  angle[i] = atan2(dy, dx);
  targetX = xin - cos(angle[i]) * segLength;
  targetY = yin - sin(angle[i]) * segLength;
}

function segment(x, y, a, sw) {
  strokeWeight(sw);
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}
