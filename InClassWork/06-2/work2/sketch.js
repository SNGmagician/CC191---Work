/* Create a basic GUI element - AKA. Button */

var button = {};
var lightningPos = 0;

function setup() {
    createCanvas(800,400);
    background(0);
    button.x = width / 8;
    button.y = height / 8;
    button.width = 50;
    button.height = 80;
    button.color_a = color(20, 40, 60);
    button.color_d = color(100, 150, 200);
    button.text = "My Button!";
  }

function draw() {
frameRate(30);


    if (mouseX >= button.x - button.width/2 && mouseX <= button.x + button.width/2 && mouseY >= button.y - button.height/2 && mouseY <= button.y + button.height/2) {
        fill(button.color_a);
        if( mouseIsPressed ){
            background(0, 128, 150);

        if (frameCount % 5 === 0) {
        fill(255);
        // rect(x,y,w,h)
        rect(lightningPos+70, 300, 10, 100);
        quad( lightningPos+105, 340, lightningPos+110, 330, lightningPos+65, 340, lightningPos+65, 355);
        triangle(lightningPos+105,340,lightningPos+55,height,lightningPos+90,340);
      }

        }
    } else {
        fill(button.color_d);
    }
    ellipse(button.x,button.y,button.width,button.height);

    rectMode(CENTER);
    noStroke();
    fill(255);
    rect(width/8.5, height/9, 10, 30);
    quad( 105, 55, 110, 45, 89, 60, 89, 65);
    triangle(105,55,95,80,100,55);
    // text(button.text, button.x-45, button.y);
    ellipse(700,50,30,30);

    // clouds
    fill(0,10,25);
    ellipse(width/2, 250, width/3, 75);
    ellipse(width/5, 250, width/2, 75);
    ellipse(width, 250, width/1.25, 75);

if (frameCount % 15 === 0) {
  ellipse(random(0,width),250, random(20,150),random(20,120));
  }

if (frameCount % 5 === 0) {

  background(0,33);
}
lightningPos =  random(0,width);

}
