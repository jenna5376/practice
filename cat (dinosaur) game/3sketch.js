//cat obstacle game

/*
Resources:

Code:
https://github.com/p5-serial/p5.serialport
https://github.com/bmoren/p5.collide2D/blob/master/p5.collide2d.min.js
https://github.com/CodingTrain/website/tree/main/CodingChallenges/CC_147_Chrome_Dinosaur_Game/Processing/CC_147_Chrome_Dinosaur_Game

Sound:
https://www.youtube.com/watch?v=1vuMpIIPAxU
https://www.youtube.com/watch?v=37-paiEz0mQ
https://www.youtube.com/watch?v=cVFsoBMkpGk
https://www.youtube.com/watch?v=sw0R2VnmTFA

*/

//initialize variables
let serial; // variable for serial object
var portSelector; // a select menu for the port list
let cat;

let cat0Img;
let cat1Img;
let spikeImg;
let birdImg;

let spike = [];
let bird = [];
let score = 0;
let x = 0;
let y = 0;

//load images
function preload() {
  bgImg = loadImage("2bg.png");
  cat0Img = loadImage("2defaultcat.png");
  cat1Img = loadImage("2sneakcat.png");
  spikeImg = loadImage("2spike.png");
  birdImg = loadImage("2bird.png");
  gameOverImg = loadImage("2gameover.png");
  bgSound = loadSound("2bgmusic.mp3");
  jumpSound = loadSound("2jumpsound.mp3");
  shiftSound = loadSound("2shiftsound.mp3");
  gameOverSound = loadSound("2gameoversound.mp3");
  pixelfont = loadFont("pixelfont.otf");
}

let options = {
  baud: 9600, // Serial baud Rate
};

function setup() {
  noStroke()
  //set up volume
  jumpSound.setVolume(0.1);
  shiftSound.setVolume(0.3);

  //start bg music
  bgSound.play();

  //canvas, cat setup
  createCanvas(650, 200);
  cat = new Cat();

  //serial setup
  serial = new p5.SerialPort(options); // Create the serial object
  let portlist = serial.list(); // get an array of available serial ports
  // register some callbacks
  serial.on("connected", serverConnected); // print feedback on connection
  serial.on("list", gotList); // print out list of available ports
  serial.on("error", gotError); // print out any errors when they occur
  serial.on("open", gotOpen); // print out feedback when the port is opened
  serial.on("data", serialEvent); // callback for when p5 receives data from arduino

  //score counter
  setInterval(increaseScore, 100);
}

function draw() {
  //generate spike
  if (random(1) < 0.005) {
    spike.push(new Spike());
  }

  //generate bird
  if (random(1) < 0.001) {
    bird.push(new Bird());
  }

  image(bgImg, 0, 0);

  //instructions
  textFont(pixelfont);
  textSize(12);
  fill(71, 61, 56);
  text("wagon cat: avoid all the dangerous obstacles!", 15, 25);
  text("press space to jump / f to shift", 15, 50);

  //display score
  textSize(12);
  text("Score: " + score, width - 90, 25);

  //generate cat
  cat.show(x);
  cat.move();

  //generate spike
  for (let s of spike) {
    s.move();
    s.show();
    if (cat.hits(s, s, y)) {
      console.log("game over");
      gameOver();
      noLoop();
    }
  }

  //generate bird
  for (let b of bird) {
    b.move();
    b.show();
    if (cat.hits(b, b, y)) {
      console.log("game over");
      gameOver();
      noLoop();
    }
  }
}

//jump and shift control (no arduino)
function keyPressed() {
  if (key == " ") {
    jumpSound.play();
    cat.jump();
  }
  if (key == "f") {
    shiftSound.play();
    x = 1;
    y = 1;
  }
}
function keyReleased() {
  if (key == "f") x = 0;
  y = 0;
}

//jump and shift control for arduino
function serialEvent() {
  let currentString = serial.readStringUntil("\r\n");

  if (currentString) {
    let sensors = split(currentString, ",");

    //display sensor values in console
    console.log(sensors);
    serial.write("x");

    //jump control
    y = int(sensors[1]);
    if (sensors[1] == 1) {
      jumpSound.play();
      cat.jump();

      //shift control
      if (sensors[0] <= 500) {
        shiftSound.pause();
        x = 0;
        y = 0;
      } else {
        shiftSound.play();
        x = 1;
        y = 1;
      }
    }
  }
}

//game over
function gameOver() {
  //boxes
  fill(255, 100);
  rect(0, 0, width, height);

  image(gameOverImg, width / 2 - 150, height / 2 - 50);

  //text
  fill(45, 49, 161);
  textSize(28);
  text("GAME OVER", width / 2 - 75, height / 2 - 30, 170, 35);
  textSize(12);
  text("your total score is: " + score, width / 2 - 55, height / 2 + 25);

  //sound
  bgSound.pause();
  gameOverSound.play();
}

//score counter
function increaseScore() {
  score++;
}
