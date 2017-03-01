var pt1_x, pt1_y;

var pt2_x, pt2_y;

var pt3_x;
var pt3_y;

var col_r = 0;
var col_g = 10;
var col_b = 0;

function setup() {
createCanvas(800,800);
background(0);


pt1_x = 0 - width;
pt1_y = height;

pt2_x = width;
pt2_y = 0 - height;

pt3_x = width;
pt3_y = height;


}

function draw() {
pt1_x += 10;
pt2_y += 10;

col_g = random(0,255);

fill(0,20,244);

triangle(pt1_x,pt1_y,pt2_x,pt2_y,pt3_x,pt3_y);

}
