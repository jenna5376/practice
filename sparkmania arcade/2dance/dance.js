let background = 0; //for moving background
let posenum = 2;
let timer = 20;
let timerready = "no";
let game3Over = "no";

let danceMusic = "off";

function game3() {
  //playing background music
  if (danceMusic == "off") {
    danceMusicfile.play();
    console.log("playing");
  }
  danceMusic = "on";
  gamenum = 2;
  timerready = "yes";

  //background animation
  background += 1;

  if (background >= 15) {
    backgroundframe = floor(random(3));
    background = 0;
  }

  imageMode(CORNER);
  image(backgroundanimation[backgroundframe], 0, 0, 960, 540);

  //podium
  rectMode(CENTER);
  noStroke();
  fill(213, 195, 166);
  rect(displayX + 180, displayY + 320, 250, 50, 30, 30, 2, 2);
  fill(255, 0, 255);

  //panda dancer
  imageMode(CENTER);
  image(prompts[promptNumber], displayX + 180, displayY + 170, 300, 350); //prints the image with respective poses

  //mini dancers
  imageMode(CORNER);
  minidancer = [
    [minibunny1, minibunny2, minibunny3, minibunny4, minibunny5],
    [minibird1, minibird2, minibird3, minibird4, minibird5],
    [minidog1, minidog2, minidog3, minidog4, minidog5],
    [minicat1, minicat2, minicat3, minicat4, minicat5],
    [minipenguin1, minipenguin2, minipenguin3, minipenguin4, minipenguin5],
    [minifrog1, minifrog2, minifrog3, minifrog4, minifrog5],
  ];

  for (let i = 0; i < 4; i++) {
    image(minidancer[chrnum][posenum], 500 + 100 * i, 315, 100, 100);
  }

  //bottom panel
  rectMode(CORNER);
  fill(237, 154, 211, 150);
  rect(0, height - 125, width, 150);

  //check pose, increase point
  if (promptNumber == posenum) {
    correctposeSoundfile.play();
    increasePoint();
    pointConversion();
    promptNumber = floor(random(5));
  }

  //image(dancecorner[chrnum],60,220,270,300)

  //display controls
  if (timer > 12) {
    image(dancenum, 0 + 120, 0, width - 140, height - 100);
  } else if (timer == 12) {
    push();
    tint(255, 150);
    image(dancenum, 0 + 120, 0, width - 140, height - 100);
    pop();
  }

  //display score, timer
  updateScore();
  textFont(pixelfont);
  fill(255);
  textSize(25);
  text("Timer: " + timer, 350, 475);

  //end game
  if (timer == 0) {
    game3Over = "yes";
  }
}

function decreaseTimer() {
  if (timerready == "yes") {
    timer -= 1;
  }
}
