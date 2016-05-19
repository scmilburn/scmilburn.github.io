var max_dist;
var y;


function setup() {
  createCanvas(600, 400);
  max_dist = dist(0, 0, height, width);
}

function draw() {
  background(50);
  
  for (var j = height+40; j >= 0; j -= 20){
    for(var i = width+40; i >= 0; i -= 20){
      var size = dist(mouseX, mouseY, i, j);
      var x = 230 + (y % 35);
      
      var r = 0;
      var g = random(230, 255);
      var b = random(230, 255);
      size = size/5 + 25;
      fill(r, g, b);
      ellipse((i-40), (j-40), size, size);
    }
    
  }
}
