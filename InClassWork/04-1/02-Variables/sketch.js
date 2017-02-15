// to create variable --> "var"

var myFirstVar;


function setup() {
createCanvas(800, 400);
background(200);

noFill();

myFirstVar = 70;
translate(400,200);
ellipse(0, 0, myFirstVar, myFirstVar);

mySecondVar = myFirstVar - 60;
ellipse(0, 0, mySecondVar, mySecondVar);


}



function draw() {

}
