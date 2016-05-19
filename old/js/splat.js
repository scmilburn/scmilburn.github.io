var palette = [];
var i;
function setup() {
  createCanvas(600, 400);
  background(0);

  i = 0;
  palette[0] = color(220, 170, 45);//yellow
  palette[1] = color(170, 32, 28);//red
  palette[2] = color(29, 50, 100);//blue
  palette[3] = color(245,223, 202);//white
  palette[4] = color(25, 21, 18);//black
  noLoop();
} 

function draw() {

  for (var i = 0; i < 7; i++){
    var x = random(0, width)
    var y = random(0, height)
    var sizeX = random(100, width*2);
    var sizeY = random(100, height*2);

    fill(palette[i%5]);
    noSmooth();
    noStroke();
    
    ellipse(x, y, sizeX, sizeY);
    fill(palette[4]);
    ellipse(x - height/4, y - width/4, sizeX/3, sizeY/3);
    fill(palette[3]);
    ellipse(x - height/3, y - width/3, sizeX/3, sizeY/3);
  }
}

function mousePressed(){
  redraw();
}