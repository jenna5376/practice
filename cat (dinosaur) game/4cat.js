class Cat {
  //variables
  constructor() {
    this.r = 100;
    this.x = 25;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 1.2;
  }

  //cat jump
  jump() {
    if (this.y == height - this.r) {
      this.vy = -25;
    }
  }

  //cat hits
  hits(spike, bird, x) {
    //cat standard
    if (x == 0) {
      return collideRectRect(
        this.x + 5,
        this.y + 5,
        this.r - 20,
        this.r - 15,
        spike.x,
        spike.y,
        spike.r,
        spike.r
      );
      return collideRectRect(
        this.x + 5,
        this.y + 5,
        this.r - 20,
        this.r - 15,
        bird.x,
        bird.y,
        bird.r,
        bird.r
      );

      //cat shift
    } else if (x == 1) {
    }
    return collideRectRect(
      this.x + 5,
      this.y + 30,
      this.r - 20,
      this.r - 25,
      spike.x,
      spike.y,
      spike.r,
      spike.r
    );
    return collideRectRect(
      this.x + 5,
      this.y + 20,
      this.r - 20,
      this.r - 15,
      bird.x,
      bird.y,
      bird.r,
      bird.r
    );
  }

  //move cat
  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  //display cat
  show() {
    if (x == 0) {
      image(cat0Img, this.x, this.y, this.r, this.r);
    } else if (x == 1) {
      image(cat1Img, this.x, this.y, this.r, this.r);
    } else if (x == 2) {
      image(cat2Img, this.x, this.y, this.r, this.r);
    }
  }
}
