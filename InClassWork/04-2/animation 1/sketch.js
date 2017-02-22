function setup() {
createCanvas(600,600);

}

function draw() {
// by moving background to draw function, it overwrites the background every frame.
background(200,40,6);
ellipse(mouseX,mouseY,30,30);

}
