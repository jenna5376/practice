class Bird {
  //variables
  constructor() {
    this.r = 40;
    this.x = width;
    this.y = 80;
    this.speed = 5;
  }

  //display bird
  show() {
    image(birdImg, this.x, this.y, this.r, this.r);
  }

  //move bird
  move() {
    this.x -= this.speed;
  }
}
