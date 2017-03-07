var ball_x;
var ball_y;

var ball_width = 40;
var ball_height = 40;

function setup() {
createCanvas(600,600);
background(255);

ball_x = width * 0.5;
ball_y = height * 0.5;

}

function draw() {

ellipse(ball_x, ball_y, ball_width, ball_height);

}
