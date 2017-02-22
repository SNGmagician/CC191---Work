
function setup() {
createCanvas(600,700);

}


function draw() {

var fillColor;
var ellipseSize;

fillColor = map(mouseX, 0, 600, 0, 255);
ellipseSize = map(mouseY, 0, 600, 300, 200);
//
fill(fillColor);
ellipse(mouseX, mouseY, ellipseSize, ellipseSize);

}
