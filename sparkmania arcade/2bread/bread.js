let breadhit = "no";
let playerpos = 0;
let totalbread = 0;
let game2Over = "no";
let bready = 400;
let breadspeed = 5;
let breadMusic = "off";
chrx = [225, 375, 525];
breadx = [225, 375, 525];

function game2() {
  //playing background music
  if (breadMusic == "off") {
    breadMusicfile.play();
    console.log("playing");
  }
  breadMusic = "on";

  gamenum = 1;

  //set up bg, game screen
  fill(222);
  rect(0, 0, width, height);
  imageMode(CORNER);
  image(breadbg, 0, 0, width, height);
  displayX = 150;
  displayY = 88;
  displayWidth = 470;
  displayHeight = 325;
  noStroke();
  fill(245, 237, 201);
  rect(displayX - 10, displayY, displayWidth, displayHeight);

  //shoot out bread
  if (game2Over == "no") {
    bread();
  }

  //bread machine, corner character
  imageMode(CORNER);
  image(breadmachine, 0, 0, width, height);
  image(breadcorner[chrnum], 630, 70, 260, 300);

  //display game controls
  if (totalbread <= 6) {
    image(breadnum, 0, 0, width, height);
  }

  //adjust bread speed
  if (totalbread == 7) {
    push();
    tint(255, 125);
    image(breadnum, 0, 0, width, height);
    pop();
  }
  if (totalbread == 7) {
    breadspeed = 7;
  }
  if (totalbread == 14) {
    breadspeed = 10;
  }

  //score
  fill(237, 154, 200, 200);
  rect(65, 445, 275, 45, 20);
  updateScore();
}

function bread() {
  //bread, bread eater image
  fill(255);
  imageMode(CENTER);
  image(breadimg, breadx[randombread], bready, 80, 80);
  image(breadeater[chrnum], chrx[playerpos], 20, 150, 135);

  //animate bread
  bready -= breadspeed;

  //increase point, launch new bread
  if (bready <= 70) {
    if (playerpos == randombread) {
      eatingbreadSoundfile.play();
      increasePoint();
      pointConversion();
    }
    randombread = floor(random(3));
    bready = 400;
    breadhit = "no";
    totalbread += 1;
  }

  //end game
  if (totalbread >= 20) {
    game2Over = "yes";
  }
}
