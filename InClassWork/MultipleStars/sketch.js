var location1 = 10;
var location2 = 10;

var starArray = [
  [5,0],
  [7,10],
  [0,4],
  [10,4],
  [3,10]
];

var idx = 0;

function setup() {
createCanvas( windowWidth, windowHeight);
background(18, 82, 189);
frameRate(20);


}

function draw() {

  drawStar(starArray);

}


function drawStar(x1, y1, x2, y2, color){

  strokeWeight(10);
  stroke(random(0,255), random(0,255), random(0,255));


  line(x1,y1,x2,y2);
return [x1,y1,x2,y2];

}
