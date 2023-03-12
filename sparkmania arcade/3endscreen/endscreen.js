let podiumy = 140;
let podiumspeed = 1;
let lightcounter = 0;
let light = "off";
let winnerMusic = "off";
let drumSound = "off";

function endScreen() {
  noStroke();
  imageMode(CORNER);
  rectMode(CORNER);

  // drumroll
  if (light == "off") {
    if (drumSound == "off") {
      drumSoundfile.loop();
      console.log("playing");
    }
    drumSound = "on";

    //lights off bg
    image(lightsoff, 0, 0, width, height);
  }

  //light on bg, stop drumroll
  if (light == "on") {
    drumSoundfile.stop();
    fill(242, 230, 191);
    rect(0, 0, width, height);
    image(lightson, 0, 0, width, height);
  }

  //podium
  fill(144, 144, 158);
  rectMode(CENTER);
  rect(width / 2, height + podiumy, 250, 400, 10);

  //move podium, set light timer
  if (podiumy > -80) {
    podiumy -= podiumspeed;
  } else {
    lightcounter += 1;
    if (lightcounter > 5) {
      light = "on";
    }
  }

  //turn lights on, play music
  if (light == "on") {
    //playing background music
    if (winnerMusic == "off") {
      winnerMusicfile.play();
      console.log("playing");
    }
    winnerMusic = "on";

    //display total score
    fill(255);
    textFont(arcadefont);
    textSize(40);
    textWrap(WORD);
    textAlign(CENTER);
    text("TOTAL SCORE " + p1total, width / 2, 395, 280);
    fill(80, 78, 222);

    //display thank you message
    fill(80, 78, 500);
    textFont(pixelfont);
    textSize(20);
    text("thanks for playing :)", width / 2, 345);

    //display character
    imageMode(CENTER);
    image(dancecorner[chrnum], width / 2, 200, 200, 230);
  }
}
