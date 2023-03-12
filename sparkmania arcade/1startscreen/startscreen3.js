let displaytime = 0;

function startScreen3() {
  
  //set up bg, timer
  displaytime += 1;
  fill(200, 200, 255);
  image(gameorderbg,0, 0, width, height);
  
  //game order title
  fill(80, 78, 222);
  textFont(arcadefont);
  textSize(60);
  text("GAME ORDER", 100, 120);

  //turn off game order screen
  if (displaytime > 200) {
    tutorialover = "yes";
    displaytime = 0
  }
  
  //game text
  textFont(pixelfont)
  textSize(25)
  text("Whac-A-Mole",195,400)
  text("Bread Shooter",440,400)
  text("Dance Party",695,400)
}
