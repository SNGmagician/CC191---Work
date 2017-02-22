function setup() {
createCanvas(600,700);


}

function draw() {

  var bgVal;
  bgVal = map(mouseX, 0, 600, 0, 255);

  background(bgVal);

  text(mouseX,200,200);
  text(bgVal,200,150);

}
