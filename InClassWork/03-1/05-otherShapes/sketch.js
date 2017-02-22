function setup() {
  createCanvas(500, 500);
  background(50, 100, 255);

  translate( 250, 100);
  fill(255,10,0);
  ellipse( 0, 0, 250, 150);
text("muchfun", 50, 100);

push();
// eyes
translate(0,-30);
fill(0);
ellipse( 50, 0, 30, 20);
ellipse( -50, 0, 30, 20);
pop();

//mouth
push();
line(-75,30,75,20);
pop();

// The Nose
push();
fill(200,0,0);
triangle( 5, -15, 5, 10, 20, 15);
pop();


}
