var storm = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  var init_x = 100;

  for (var i = 0; i < 2; i++) {
    storm.push( new Arrow(random(0,width), random(5,10)));
}

    }

function draw() {
  background(0, 138, 181);
  fill(34, 133, 0);
  rect(windowWidth/2,windowHeight,windowWidth,windowHeight/2);
  rectMode(CENTER);
  fill(107, 107, 107);
  rect(windowWidth/1.98,windowHeight/1.5,windowWidth/8,windowHeight/4);
  rect(windowWidth/1.75,windowHeight/1.85,windowWidth/24,windowHeight/16);
  rect(windowWidth/2.25,windowHeight/1.85,windowWidth/24,windowHeight/16);
  rect(windowWidth/1.98,windowHeight/1.85,windowWidth/24,windowHeight/16);
  fill(0,0,0);
  rect(windowWidth/1.98,windowHeight/1.38, windowWidth/16,windowHeight/8);
  ellipse(windowWidth/1.979,windowHeight/1.5,windowWidth/16,windowHeight/16);



  for (var i = 0; i < storm.length; i++) {
    storm[i].display();
    storm[i].move();
  }

  if (storm.length <= 150) {

    if (frameCount%60 == 0) {
  storm.push( new Arrow(random(0,width), random(5,10)));
}


}

}


  /*
  Sheild(-25);
  console.log(mouseX);

  translate(100,100);
  Arrow.display();
  Arrow();

//Drawing within functions
function Arrow (init_x, init_y){

    fill(87, 55, 2);
    rectMode(CENTER);
    rect(0,0,5,80);

    fill(168, 168, 168);
    triangle(-8,40,8,40,0,55);

    fill(242, 242, 242);
    quad(2,-20,2,-38,10,-40,9,-22);
    quad(-2,-20,-2,-38,-10,-40,-9,-22);
  }
  */
/*
function Sheild (){
  push();
  angleMode(DEGREES);
  // rotate(ang);
  fill(113, 53, 4);
  rectMode(CENTER);
  rect(mouseX,height/2,160,10);
  fill(168, 168, 168);
  noStroke();
  rect(mouseX,(height/2)+15,30,5);
  rect(mouseX+15,(height/2)+12,6,12);
  pop();
}
*/
