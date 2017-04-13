function Arrow(init_x, delta) {
    this.init_y = -100;
    this.x = init_x;
    this.y = this.init_y;
    this.delta = delta;
}

Arrow.prototype.move = function() {
    this.y += this.delta;

    this.checkEdges();
};

Arrow.prototype.display = function() {
    push();
    translate(this.x, this.y);

    fill(87, 55, 2);
    rectMode(CENTER);
    rect(0, 0, 5, 80);

    fill(168, 168, 168);
    triangle(-8, 40, 8, 40, 0, 55);

    fill(242, 242, 242);
    quad(2, -20, 2, -38, 10, -40, 9, -22);
    quad(-2, -20, -2, -38, -10, -40, -9, -22);
    pop();
};


Arrow.prototype.checkEdges = function() {
    if (this.y >= height + 50) {
        this.y = this.init_y;
    }
};

Arrow.prototype.Collide = function() {

};
