class Spike {
  //variables
  constructor() {
    this.r = 30;
    this.x = width;
    this.y = height - this.r;
    this.speed = 5;
  }

  //display spike
  show() {
    image(spikeImg, this.x, this.y, this.r, this.r);
  }

  //move spike
  move() {
    this.x -= this.speed;
  }
}
