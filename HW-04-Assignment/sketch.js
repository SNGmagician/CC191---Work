var fly_1 = 900;
var fly_2 = 900;
var fly_3 = 900;

var yValue_1 = 250;   //random(0,600);
var yValue_2 = 100;   //random(0,600);
var yValue_3 = 350;   //random(0,600);

var Cape = 15;
var CapeVariation = 50;

function setup() {
createCanvas(800,600);

}



function draw() {
background(16, 203, 255);
frameRate(60);
strokeWeight(0);
var CapeFlap = noise(Cape) * height/75;

//cloud 1
ellipse(fly_1,yValue_1,150,125);
ellipse(fly_1-40,yValue_1-60,75,75);
ellipse(fly_1+75,yValue_1+10,100,100);

// cloud 2
ellipse(fly_2,yValue_2,200,100);
ellipse(fly_2,yValue_2-60,80,80);
ellipse(fly_2-35,yValue_2+30,75,100);

// hero
push();
fill(0,50,255);
rect(mouseX-25,mouseY-10, 50,20);
rect(mouseX-50,mouseY+1,30,10);
rect(mouseX-50,mouseY-10,30,10);
rect(mouseX+25,mouseY+1,30,10);
rect(mouseX+25,mouseY-12,30,10);


// skin & hair
fill(247, 216, 165);
rect(mouseX+25,mouseY-20,15,15);
rect(mouseX+50,mouseY-12,5,10);
rect(mouseX+50,mouseY+1,5,10);
fill(0);
rect(mouseX+25,mouseY-25,15,5);
rect(mouseX+25,mouseY-25,5,15);

// red parts
fill(225, 5, 5);
rect(mouseX-50,mouseY-10,12,10);
rect(mouseX-50,mouseY+1,12,10);
rect(mouseX-25,mouseY-11,8,22);
// rect(mouseX-25,mouseY-11,5,11);

triangle(mouseX+15,mouseY+10,mouseX+15,mouseY,mouseX,mouseY+10);

push();
fill(255, 221, 0);
triangle(mouseX+13,mouseY+10,mouseX+13,mouseY+3,mouseX+3,mouseY+10);
pop();


// Cape
// rect(mouseX-35,mouseY+CapeFlap, 60, 10);
quad(mouseX+25,mouseY-12,mouseX+25,mouseY-10,mouseX-35,mouseY-5-CapeFlap,mouseX-35,mouseY-30+CapeFlap);

pop();

// cloud 3
ellipse(fly_3,yValue_3,250,100);

fly_1 = fly_1-1;
fly_2 = fly_2-2;
fly_3 = fly_3-3;

if (frameCount % 1300 === 0) {fly_1 = 900;}
if (frameCount % 600 === 0) {fly_2 = 900;}
if (frameCount % 350 === 0) {fly_3 = 900;}

if (frameCount % 1300 === 0) {yValue_1 = random(0,600);}
if (frameCount % 600 === 0) {yValue_2 = random(0,600);}
if (frameCount % 350 === 0) {yValue_3 = random(0,600);}

Cape += CapeVariation;

}
