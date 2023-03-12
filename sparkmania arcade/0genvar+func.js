//general mechanics
let startMusic = "off";
let screennumber = 0;
let gamemode = "single";
let characterselected = "no";
let capture;
let point = 0;
let tutorialover = "no";
let totalscore = 0;
let rr = "no";
let gamenum;
let p1score = [0, 0, 0];
let x = 0;

let p1total = 0;
let tutorialMusic = "off";
let roundresultSound = "off";

function tutorialMusics() {
  //playing background music
  if (tutorialMusic == "off") {
    tutorialMusicfile.play();
    console.log("playing");
  }
  tutorialMusic = "on";
}

function roundresultSounds() {
  //playing sound effect
  if (roundresultSound == "off") {
    roundresultSoundfile.play();
    console.log("playing");
  }
  roundresultSound = "on";
}

function updateScore() {
  textFont(pixelfont);
  fill(255);
  textSize(25);
  text("Points: " + point, 90, 475);
  text("Score: " + totalscore, 220, 475);
}

function increasePoint() {
  point += 1;
}

function decreasePoint() {
  point -= 1;
}

function pointConversion() {
  if (screennumber == 5) {
    score = floor(random(25, 30));
  } else if (screennumber == 7) {
    score = floor(random(15, 20));
  } else if (screennumber == 9) {
    score = floor(random(10, 15));
  }
  totalscore += score;
}

function negPointConversion() {
  score = floor(random(15, 20));
  totalscore -= score;
}
