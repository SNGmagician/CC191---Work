//Variables
var spot = {
x:100,
y:50
};

var dotSize = {
x:15,
y:15
};

var dotVariableX = 5;
var dotVariableY = 5;

var col = {
r:0,
g:25,
b:50
};

function setup() {
createCanvas(windowWidth, windowHeight);
background(0);

}



function draw() {
// translate(width/2,height/2);
background(0,10);

dotVariableX = random(-5,5);
dotVariableY = random(-5,5);


col.r = random(0,10);
col.g = random(0,125);
col.b = random(0,255);

spot.x = random(0,width);
spot.y = random(0,height);

noStroke();

strokeWeight(15);
// stroke(col.r,col.g,col.b);

fill(col.r,col.g,col.b, 75);
ellipse(spot.x, spot.y,dotSize.x, dotSize.y);

if (abs(dotSize.x) >= 20) {
  dotSize.x = 1;
}

if (abs(dotSize.y) >= 50) {
dotSize.y = 5;

}

dotSize.x += dotVariableX;
dotSize.y += dotVariableY;

//CLS
if(mouseIsPressed) {
  background(0);
}
}
