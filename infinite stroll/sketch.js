//initiate variables + arrays
let x = 0;
let x2 = 0;
let x3 = 0;
let dog = 0;
let mountains = [];
let flowers = [];
let amt = 5;
let rX;
let rY;
let rVer;

function preload() {
  //load images
  cloudimg = loadImage("cloud.png");
  grassimg = loadImage("grass.png");
  shrubimg = loadImage("shrub.png");
  dog0 = loadImage("dog/dog0.png");
  dog1 = loadImage("dog/dog1.png");
  dog2 = loadImage("dog/dog2.png");
  dog3 = loadImage("dog/dog3.png");
  dog4 = loadImage("dog/dog4.png");
  dog5 = loadImage("dog/dog5.png");
  dog6 = loadImage("dog/dog6.png");
  dog7 = loadImage("dog/dog7.png");
  dog8 = loadImage("dog/dog8.png");
  mountain0 = loadImage("mountains/mountain0.png");
  mountain1 = loadImage("mountains/mountain1.png");
  mountain2 = loadImage("mountains/mountain2.png");
  mountain3 = loadImage("mountains/mountain3.png");
  mountain4 = loadImage("mountains/mountain4.png");
  mountain5 = loadImage("mountains/mountain5.png");
}

function setup() {
  createCanvas(700, 290);

  //generate mountains
  for (let i = 0; i < amt; i++) {
    rX = i * 250 + random(20);
    rY = random(-20, 20);
    rVer = floor(random(6));

    mountains[i] = new Mountain(rX, rY, rVer);
  }
}

function draw() {
  background(172, 199, 227);

  //mountain set up
  let newMountain = new Mountain(rX, rY, rVer);

  //cloud animation
  cloud(x);
  cloud(x + 1000);
  x -= 1;

  if (x % 1000 == 0) {
    x = 0;
  }

  //shrub animation
  shrub(x2);
  shrub(x2 + 1600);
  x2 -= 1.25;

  if (x2 % 1600 == 0) {
    x2 = 0;
  }

  //mountain animation

  if (x % 125 == 0) {
    rX = 730 - random(30);
    rY = random(-20, 10);
    rVer = floor(random(6));

    mountains.push(newMountain);
    mountains.splice(0, 1);
  }

  for (let i = 0; i < mountains.length; i++) {
    mountains[i].show();
    mountains[i].animate();
  }

  //grass animation
  grass(x3);
  grass(x3 + 1000);
  x3 -= 1;

  if (x3 % 1000 == 0) {
    x3 = 0;
  }

  noStroke();

  //dog animation
  dog += 1;

  if (dog == 45) {
    dog = 0;
  }

  //lower fps
  dogframe = 0;
  dogframe = floor(dog / 6);

  doganimation = [dog0, dog1, dog2, dog3, dog4, dog5, dog6, dog7, dog8];
  image(doganimation[dogframe], 10, 125, 220, 160);
}

//functions

//cloud
function cloud(x) {
  image(cloudimg, x, -50);
}

//shurb
function shrub(x2) {
  image(shrubimg, x2, -10);
}

//grass
function grass(x3) {
  image(grassimg, x3, 30);
}

//mountain class

class Mountain {
  constructor(x, y, ver) {
    this.x = x;
    this.y = y;
    this.ver = ver;
  }
  show() {
    if (this.ver == 0) {
      image(mountain0, this.x - 50, this.y);
    } else if (this.ver == 1) {
      image(mountain1, this.x - 25, this.y);
    } else if (this.ver == 2) {
      image(mountain2, this.x - 40, this.y);
    } else if (this.ver == 3) {
      image(mountain3, this.x - 40, this.y);
    } else if (this.ver == 4) {
      image(mountain4, this.x - 130, this.y);
    } else if (this.ver == 5) {
      image(mountain5, this.x - 20, this.y);
    }
  }
  animate() {
    this.x -= 2;
  }
}
