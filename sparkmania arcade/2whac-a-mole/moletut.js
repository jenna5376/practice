let tutorialMusic3 = "off";

function game1tut() {
  
  //playing background music
  if (tutorialMusic3 == "off") {
    tutorialMusicfile.play();
    console.log("playing");
  }
  tutorialMusic3 = "on";
  tutorialMusic = "on";
  
  //set up timer, tutorial image
  displaytime += 1;
  image(moletut, 0, 0, width, height);

  //tutorial title
  fill(80, 78, 222);
  textFont(arcadefont);
  textSize(42);
  text("WHAC-A-MOLE", 25, 90);

  //game instructions
  textFont(pixelfont);
  textSize(30);
  textWrap(WORD);
  text("press keys 1, 2, 3, 4, 5 to hit the moles", 600, 360, 300);
  text("make sure to avoid the angry mouse!", 600, 450, 300);

  //end tutorial
  if (displaytime > 400) {
    tutorialover = "yes";
    displaytime = 0;
  }
}
