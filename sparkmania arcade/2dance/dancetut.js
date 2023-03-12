let tutorialMusic2 = "off";

function game3tut() {
  //set up timer, tutorial image
  displaytime += 1;
  image(dancetut, 0, 0, width, height);
  rectMode(CORNER);
  noStroke();
  fill(250, 230, 130);
  rect(0, 0, 390, height);

  //tutorial title
  fill(80, 78, 222);
  textFont(arcadefont);
  textSize(60);
  text("DANCE", 45, 95);
  text("PARTY", 55, 185);

  //game instructions
  textFont(pixelfont);
  textSize(30);
  textWrap(WORD);
  text(
    "press keys 1, 2, 3, 4, 5 to match the dancing panda's moves",
    70,
    265,
    300
  );
  text(
    "the panda will change her pose once you get the correct pose",
    70,
    400,
    300
  );

  //end tutorial
  if (displaytime > 400) {
    tutorialover = "yes";
    displaytime = 0;
  }
}
