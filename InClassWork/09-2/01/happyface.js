function Happyface(init_x, init_y, size){
this.x = init_x;
this.y = init_y;
this.size = size;
this.angle = 0;
this.color = color;
this.eye = {
  x: this.size * 0.25,
  y: this.size * -0.33,
  size:

  };

}

Happyface.prototype.display = function () {

push();
translate(this.x, this.y);
rotate(this.angle);

fill(color);

ellipse(0,0,this.eye.x, this.eye.y, this.eye.size, this.eye.size);
ellipse(0,0,this.eye.x, this.eye.y, this.eye.size, this.eye.size);

push();


pop();

}
