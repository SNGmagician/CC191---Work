// to create variable --> "var"

var globalVar;

// Global Vars go outside Fuctions



function setup() {
  createCanvas(800, 400);

// Local Vars go INSIDE fuctions and cannot me used in other fuctions outside the defined fuction


}


function draw() {
  var myFirstVar;

  background(200);

  noFill();

  myFirstVar = 70;
  translate(400,200);
  ellipse(0, 0, myFirstVar, myFirstVar);

  mySecondVar = myFirstVar + 60;
  ellipse(0, 0, mySecondVar, mySecondVar);

}
