let tutorialMusic1 = "off";

function game2tut() {
  //set up timer, tutorial image
  displaytime += 1;
  image(breadtut, 0, 0, width, height);

  //tutorial title
  fill(80, 78, 222);
  textFont(arcadefont);
  textSize(60);
  text("BREAD SHOOTER", 100, 120);

  //game instruction
  textFont(pixelfont);
  textSize(20);
  textWrap(WORD);
  text(
    "press keys 1, 2, 3 to move your character and eat the bread",
    230,
    455,
    600
  );

  //end tutorial
  if (displaytime > 350) {
    tutorialover = "yes";
    displaytime = 0;
  }
}
