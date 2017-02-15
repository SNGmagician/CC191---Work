function setup() {
  createCanvas(800, 600);
  background(0,190,220);
  fill(160,80,0);
  rect(0, 400, 850, 200);


}

function draw() {
translate(400, 210);

fill( 180, 180, 180);

// sword
push();

fill(120, 40, 0);
quad(-235, 35, -220, 30, -205, 125, -218, 128);

fill( 180, 180, 180);

triangle(-218, 128, -205, 125,-210, 135);
triangle(-215, 35, -240, 40, -260, -185);

quad(-253, 50,-200, 38, -199, 30, -258, 43);

pop();


// Cape
push();
fill(200,0,10);
// quad(-100,-50,100,-50,200,100,150,200); <--- Failed quad cape
arc(90, 45, 400,280, 0, PI+QUARTER_PI, CHORD);
pop();

// shield
// push();
// fill(200,50,0);
// ellipse(150, 150, 30, 150);
// arc(150, 140, 120, 180, PI/3, 29*PI/18, CHORD);
// pop();


push(); //arm outlines
stroke(0,0,0);
strokeWeight(52);
line( 95, -25, 120, 50);
line( -95, -25, -120, 50);
line(-120, 50, -220, 80);
line(120, 50, 130, 150);
pop();

// arms
push();
stroke(180, 180, 180);
strokeWeight(50);
line( 95, -25, 120, 50);
line( -95, -25, -120, 50);
line(-120, 50, -220, 80);
line(120, 50, 130, 150);
pop();

//legs
quad(-80, 150, -20, 150, -30, 300, -70, 300);
quad(80, 150, 20, 150, 30, 300, 70, 300);


// body
quad(-100, -50, 100, -50, 80, 150, -80, 150);

push(); //Cape (shoulders)
fill(200,0,10);
quad(-100, -55, 100, -55, 100, -50, -100, -50);
pop();


// head
ellipse(0, -100, 120, 150);

fill(0);

// face slits
push();
translate(-2,0);
rect(0, -80, 3, 50);
rect(-9, -80, 3, 45);
rect(-18, -80, 3, 40);
rect(-27, -80, 3, 35);
rect(-36, -80, 3, 30);
rect(-45, -80, 3, 22);
rect(9, -80, 3, 45);
rect(18, -80, 3, 40);
rect(27, -80, 3, 35);
rect(36, -80, 3, 30);
rect(45, -80, 3, 22);
pop();

//eyes
rect(10,-100,30,4);
rect(-40,-100,30,4);

rect(-60,-90,120,1); //Dividing line for face-plate


// center point marker
// push();
// fill(0,255,255);
// ellipse(0,0,10,10);
// pop();


}
