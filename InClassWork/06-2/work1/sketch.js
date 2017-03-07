var ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.dx = 7;
ball.dy = 5;
ball.r = 255;
ball.g = 255;
ball.b = 255;


function setup() {
  createCanvas(600, 400);
  background(255);
}

function draw() {


  // Move the ball and Keep the ball on the screen.
  ball.x += ball.dx;
  ball.y += ball.dy;
  if (ball.x >= width || ball.x <=0) {
    ball.dx *= -1;
  }

  if (ball.y >= height || ball.y <= 0) {
    ball.dy *= -1;
  }

console.log (ball.dy);

ball.r = map(ball.x, 0, width, 255, 0);
ball.g = map(ball.x, 0, width, 0, 255);
ball.b = map(ball.y, 0, height, 0, 255);


fill(ball.r, ball.g, ball.b);

  // draw our ball
  ellipse(ball.x, ball.y, ball.width, ball.width);
}
