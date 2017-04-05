/*bird Class*/

// created: 2017-03-27

// constructor method

function Bird(init_x, init_y, size_w) {
  this.x = init_x;
  this.y = init_y;
  this.w = size_w;
  this.h = size_w;


}

Bird.prototype.display = function () {
push();
translate(this.x,this.y);
ellipse(0,0,this.w, this.h);
translate(this.w/2,0);
// fill();
// triangle(-x,this.h * -0.1,-2,this.h * 0.1, this.)


pop();

};
