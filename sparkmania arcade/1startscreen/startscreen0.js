let sscounter = 0;
let moonspeed = 0;

function startScreen0() {
  //set up bg
  fill(245, 162, 210);
  image(startscreenbg, 0, 0, 960, 540);
  image(bgsparkles, 0, 0, 960, 540);
  imageMode(CENTER);

  //rotating moon
  push();
  sscounter += 1;

  if (sscounter < 50) {
    moonspeed += 0.002;
  } else if (sscounter > 50) {
    moonspeed -= 0.002;
  }
  if (sscounter >= 100) {
    sscounter = 0;
    moonspeed = 0
  }
  rotate(moonspeed);
  image(moon, 240, 230, 110, 106);
  pop();

  //arcade title
  image(title, width / 2, height / 2 - 70, 638, 292);
  imageMode(CORNER);

  //credit
  fill(80, 78, 222);
  textFont(pixelfont);
  textSize(20);
  text("by Jenna and Tatiana", width / 2 - 75, 375);

  //flickering text
  titleopacity = 255;
  if (sscounter > 80) {
    titleopacity = 20;
  } else if (sscounter > 60) {
    titleopacity = 125;
  } else if (sscounter / 2 > 0) {
    titleopacity = 255;
  }
  fill(255, titleopacity);
  textFont(pixelfont);
  textSize(50);
  text("press B to start", 325, 450);
}
