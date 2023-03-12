let overlayxy = 0;
let gmcounter = 0;
let modeopacity;
let stary = 245;

function startScreen1() {
  
  //bg
  rectMode(CORNER);
  image(bg1, 0, 0, width, height);
  
  //adjust bg color
  fill(0, 204, 255, 20);
  rect(0, 0, width, height);

  //game mode title
  fill(220, 254, 254);
  textFont(arcadefont);
  textSize(60);
  text("GAME MODE", 100, 120);

  //mode rectangle
  noStroke();
  rectMode(CENTER);
  fill(245, 237, 201);
  rect(width / 2, (2 * height) / 3 - 50, 600, 300);

  //flickering text
  overlayxy -= 0.5;
  if (overlayxy < -700) {
    overlayxy = 0;
  }
  
  modeopacity = 255;
  gmcounter += 1;

  textFont(pixelfont)
  fill(72, 80, 161);
  textSize(60);

  text("Single Player", 320, 260);
  text("Multiplayer", 320, 360);

  if (gmcounter > 20) {
    modeopacity = 1;
  } else if (gmcounter / 2 > 0) {
    modeopacity = 255;
  }
  if (gmcounter > 50) {
    gmcounter = 0;
  }

  fill(207, 74, 152, modeopacity);

  if (gamemode == "single") {
    text("Single Player", 320, 260);
    stary = 245;
  } else if (gamemode == "multi") {
    text("Multiplayer", 320, 360);
    stary = 355;
  }

  //rotating star
  push();
  translate(260, stary);
  imageMode(CENTER);
  rotate(frameCount / 150);
  image(star, 0, 0, 100, 100);
  pop();
  
  //control guide
  fill(207, 74, 152);
  textFont(pixelfont);
  textSize(20);
  text("*use arrows to select / return to confirm", width / 2 - 160, 410);
}
