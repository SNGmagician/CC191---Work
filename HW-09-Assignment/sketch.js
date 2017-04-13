var asteroids = [];
var arrNum = 15;

function setup() {
    createCanvas(800, 600);
    for (var i = 0; i < arrNum; i++) {
        asteroids.push( new Asteroid(
            random(1, 800),
            random(1, 600)
        )
      );
    }
}

function draw() {
  background(0);

    for (var i = 0; i < asteroids.length; i++) {
        asteroids[i].display();
        asteroids[i].move();
        asteroids[i].collisionCheck(asteroids,i);
        }
}
