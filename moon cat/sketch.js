//moon cat

//initialize variables
size1 = 3;
size2 = 5;
size3 = 8;
eye1 = 190;
eye2 = 190;
spacing = 9;
star = 20;
starAdjustment = 2;
FH = 10;
starCursor = false;
starAni = false;
let button;

function setup() {
  createCanvas(550, 550);

  //random ribbon color
  H = random(255);
  S = (60, 100);
  B = 40;

  //star cursor button
  button = createButton("★");
  button.position(5, height + 10);
  button.mousePressed(starCursorButton);

  //reset button
  button = createButton("reset");
  button.position(35, height + 10);
  button.mousePressed(resetButton);
}

//drawing
function draw() {
  //star animation

  //reset button stars
  if (starAni == true && spacing < 400) {
    spacing += 5;
  }
  if (spacing >= 400) {
    spacing = 11;
    starAni = false;
  }

  //big stars
  if (spacing <= 10.5 && spacing >= 9 && starAni == false) {
    spacing += 0.03;
  }
  if (spacing >= 10.45 && starAni == false) {
    spacing *= -1;
  }
  if (spacing < 9) {
    spacing += 0.15;
  }

  //tinystars
  if (size2 <= 6.4 && starAni == false) {
    size2 += 0.2;
  }
  if (size2 >= 6.4) {
    size2 -= 1.4;
  }

  //setting up colors
  colorMode(RGB);

  sky = color(42, 40, 88);
  sky2 = color(114, 139, 168);
  sky3 = color(207, 221, 236);
  moonstar = color(252, 233, 137);
  branch = color(172, 148, 123);
  leaves = color(90, 130, 70);
  cat = color(0);
  eye = color(252, 233, 137);
  noseear = color(236, 187, 138);
  whiskers = color(255);
  starcursor = color(245, 204, 69);

  //bg + bg circle
  background(255);
  noStroke();

  bgCircle(sky3, 20);
  bgCircle(sky2, 80);
  bgCircle(sky, 112);

  //branch
  fill(leaves);
  quad(148, 381, 116, 380, 135, 395, 190, 410);
  fill(branch);
  arc(width / 2, height / 2 + 150, 280, 100, PI, 0);
  quad(405, 391, 440, 360, 380, 390, 320, 416);
  fill(sky);
  arc(width / 2, height / 2 + 180, 250, 100, PI, 0);
  fill(leaves);
  quad(383, 371, 406, 350, 399, 373, 370, 400);
  quad(423, 411, 436, 395, 415, 385, 368, 400);

  //moon
  fill(moonstar);
  ellipse(140, 220, 60, 60);
  fill(252, 233, 137, 50);
  ellipse(135, 225, 60, 60);
  fill(sky);
  ellipse(150, 212, 52, 52);

  //big stars
  starBig(328, 200);
  starBig(430, 300);
  starBig(85, 310);
  starBig(300, 460);
  starBig(220, 95);

  //small stars
  starSmall(470, 250, size3);
  starSmall(360, 130, size3);
  starSmall(180, 350, size2);
  starSmall(415, 200, size2);
  starSmall(135, 280, size2);
  starSmall(365, 440, size2);
  starSmall(215, 420, size3);
  starSmall(160, 150, size1);
  starSmall(328, 200, size3);
  starSmall(430, 300, size1);
  starSmall(85, 310, size3);
  starSmall(300, 460, size1);
  starSmall(220, 95, size3);

  //flowers
  colorMode(HSB);
  flower(5, 12, 8, 420, 370);
  flower(5, 10, 8, 380, 390);
  flower(5, 10, 8, 400, 405);
  flower(5, 10, 8, 170, 390);
  colorMode(RGB);

  //tail
  fill(cat);
  rotate(-PI / 6);
  rect(width / 2 - 210, height / 2 + 175, 80, 20, 10);
  rotate(PI / 6);
  rect(width / 2 + 66, height / 2 - 18, 20, 80, 10);
  ellipse(width / 2 + 75, height / 2 + 50, 20, 20);
  rotate(-PI / 4);
  rect(width / 2 - 220, height / 2 + 150, 35, 20, 10);
  rotate(PI / 4);
  ellipse(width / 2 + 76, height / 2 - 11, 20, 20);

  //body
  rect(width / 2 - 47, height / 2 - 35, 94, 138, 50, 50, 20, 20);
  rect(width / 2 - 60, height / 2 - 8, 120, 118, 50, 50, 20, 20);
  rect(width / 2 - 40, height / 2 + 75, 30, 50, 10);
  rect(width / 2 + 8, height / 2 + 75, 30, 50, 10);

  //ribbon
  colorMode(HSB);
  ribbon = color(H, S, B);
  fill(ribbon);
  arc(width / 2, height / 2 - 32, 55, 20, 0, PI);

  //face
  fill(cat);
  rect(width / 2 - 50, 156, 100, 90, 255, 255, 35, 35);
  ellipse(width / 2 + 4, height / 2 - 125, 8, 15);
  rotate(PI / 6);
  ellipse(width / 2 + 38, height / 2 - 278, 16, 8);
  rotate(-PI / 6);
  triangleWH(cat, -45, -90, -10, -105, -50, -130);
  triangleWH(cat, 45, -90, 10, -105, 50, -130);
  triangleWH(noseear, -43, -105, -35, -110, -45, -120);
  triangleWH(noseear, 43, -105, 35, -110, 45, -120);

  //eyes
  fill(moonstar);
  ellipse(width / 2 - 21, 200, 9, 9);
  ellipse(width / 2 + 21, 200, 9, 9);

  //nose, whiskers
  triangleWH(noseear, -8, -60, 8, -60, 0, -55);
  lineWH(-60, -65, -15, -55);
  lineWH(60, -65, 15, -55);

  //eye animation
  noStroke();
  fill(cat);
  ellipse(width / 2 - 21, eye1, 9, 9);
  ellipse(width / 2 + 21, eye2, 9, 9);

  //ribbon pt2
  triangleWH(ribbon, 40, -1, 20, -28, 35, 20);
  triangleWH(ribbon, 10, -5, 20, -28, 24, 8);

  //star cursor
  starAnimation();
}

//mouse pressed animation
function mousePressed() {
  colorMode(HSB);
  FH = random(255);
  if (eye1 < 198 && eye2 < 198) {
    eye1 += 1.2;
    eye2 += 1.2;
  }
}

//new functions

//bg circle
function bgCircle(color, x) {
  fill(color);
  ellipse(width / 2, height / 2, width - x, height - x);
}

//big star
function starBig(x, y) {
  fill(moonstar);
  circle(x, y, star - starAdjustment);
  fill(sky);
  circle(x - spacing, y - spacing, star);
  circle(x + spacing, y - spacing, star);
  circle(x - spacing, y + spacing, star);
  circle(x + spacing, y + spacing, star);
}

//small star
function starSmall(x, y, size) {
  fill(moonstar);
  circle(x, y, size);
}

//triangle
function triangleWH(color, x, y, x2, y2, x3, y3) {
  fill(color);
  triangle(
    width / 2 + x,
    height / 2 + y,
    width / 2 + x2,
    height / 2 + y2,
    width / 2 + x3,
    height / 2 + y3
  );
}

//flower
function flower(spacing2, petal, pollen, x, y) {
  fill(FH, 15, 140);
  circle(x - spacing2, y - spacing2, petal);
  circle(x + spacing2, y - spacing2, petal);
  circle(x - spacing2, y + spacing2, petal);
  circle(x + spacing2, y + spacing2, petal);
  fill(moonstar);
  circle(x, y, pollen);
}

//whiskers
function lineWH(x, y, x2, y2) {
  strokeWeight(1);
  stroke(whiskers);
  line(width / 2 + x, height / 2 + y, width / 2 + x2, height / 2 + y2);
  line(width / 2 + x, height / 2 + y + 20, width / 2 + x2, height / 2 + y2);
}

//star
function starShape(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

//star cursor
function starAnimation() {
  if (starCursor == true) {
    fill(starcursor);
    push();
    translate(mouseX, mouseY);
    rotate(frameCount / -50.0);
    starShape(0, 0, 5, 10, 5);
    pop();
  }
}

function starCursorButton() {
  if (starCursor == false) {
    starCursor = true;
  } else {
    starCursor = false;
  }
}

//reset
function resetButton() {
  eye1 = 190;
  eye2 = 190;
  starAni = true;
}
