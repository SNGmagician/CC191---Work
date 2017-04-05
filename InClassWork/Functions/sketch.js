var location1 = 10;
var location2 = 10;

var starArr = [
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

var idxPlus = (idx + 1) % starArr.length;

var x1 = starArr[idx][0] * 50;
var y1 = starArr[idx][1] * 50;
var x2 = starArr[idxPlus][0] * 50;
var y2 = starArr[idxPlus][1] * 50;

  var returnLocation = randomStick(x1,y1,x2,y2);
  console.log(returnLocation);
idx = (idx+1) % starArr.length;


// background(18, 82, 189, 15);
// location1 = returnLocation[0];
// location2 = returnLocation[1];


// if(mouseIsPressed){
//   location1 = mouseX
//   location2 = mouseY;
// }

}


function randomStick(x1, y1, x2, y2){
  // var x1 = random( 0, width);
  // var y1 = random( 0, height);
  // var x2 = random( 0, width);
  // var y2 = random( 0, height);
  // var stickColor = rgb(random(0,255), random(0,255), random(0,255));


  strokeWeight(18);
  stroke(random(0,255), random(0,255), random(0,255));


  line(x1,y1,x2,y2);
return [x1,y1,x2,y2];

}
