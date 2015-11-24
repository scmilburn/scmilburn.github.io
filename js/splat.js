function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  var r = 0//random(0, 255);
  var g = random(0, 255);
  var b = random(200, 255);
  var x = random(0, width)
  var y = random(0, height)
  fill(r, g, b);
  var size = random(10, 200);
  noStroke();
  //center
  ellipse(x, y, size, size);
  //up
  ellipse(x, y+size, size/3, size/3);
  //down
  ellipse(x, y-size, size/3, size/3);
  //left
  ellipse(x-size, y, size/3, size/3);
  //right
  ellipse(x+size, y, size/3, size/3);
  
}