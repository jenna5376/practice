//self-portrait project

//animation variables
let smile = 8;
let eye = 10;
let spacing = 10;
let petal = 20;
let petaladjustment = 5;
let textopacity = 255;

//setup
function setup() {
  createCanvas(300, 300);
}

//animation
function mousePressed() {
  if (smile < 20 && eye > 3) {
    smile += 1;
    eye -= 1;
  }
  if (petal < 80 && spacing < 40) {
    petal += 4;
    spacing += 2;
    petaladjustment += 0.5;
  }
  if ((textopacity = 255)) {
    textopacity -= 255;
  }
}

//drawing
function draw() {
  //setting up colors
  let skin = color(253, 234, 221);
  let skin2 = color(240, 210, 200);
  let hair = color(35, 18, 11);
  let cheek = color(235, 175, 168, 180);
  let eyes = color(20, 15, 10);
  let mouth = color(90, 20, 10);
  let shirt = color(211, 226, 235);
  let shirt2 = color(190, 210, 220);
  let earrings = color(180);
  let buttons = color(255, 255, 255);
  let flower = color(255, 247, 135);
  let flower2 = color(255, 192, 203, 150);
  let flower3 = color(168, 164, 208, 150);
  let flower4 = color(178, 208, 164, 150);
  let flower5 = color(152, 204, 204, 150);
  let flower6 = color(235, 180, 211, 150);
  let flower7 = color(250, 212, 168, 150);
  let flower8 = color(245, 159, 159, 150);
  let text1 = color(0);

  background(245, 240, 230);

  //flower 1, pink
  let x = 50;
  let y = 120;

  fill(flower2);
  circle(x - spacing, y - spacing, petal);
  circle(x + spacing, y - spacing, petal);
  circle(x - spacing, y + spacing, petal);
  circle(x + spacing, y + spacing, petal);
  fill(flower);
  circle(x, y, petal - petaladjustment);

  //flower 2, purple
  let x2 = 240;
  let y2 = 290;

  fill(flower3);
  circle(x2 - spacing, y2 - spacing, petal);
  circle(x2 + spacing, y2 - spacing, petal);
  circle(x2 - spacing, y2 + spacing, petal);
  circle(x2 + spacing, y2 + spacing, petal);
  fill(flower);
  circle(x2, y2, petal - petaladjustment);

  //flower 4, green
  let x3 = 200;
  let y3 = 60;

  fill(flower4);
  circle(x3 - spacing, y3 - spacing, petal);
  circle(x3 + spacing, y3 - spacing, petal);
  circle(x3 - spacing, y3 + spacing, petal);
  circle(x3 + spacing, y3 + spacing, petal);
  fill(flower);
  circle(x3, y3, petal - petaladjustment);

  //flower 5, blue
  let x4 = 10;
  let y4 = 10;

  fill(flower5);
  circle(x4 - spacing, y4 - spacing, petal);
  circle(x4 + spacing, y4 - spacing, petal);
  circle(x4 - spacing, y4 + spacing, petal);
  circle(x4 + spacing, y4 + spacing, petal);
  fill(flower);
  circle(x4, y4, petal - petaladjustment);

  //flower 5, magenta
  let x5 = 10;
  let y5 = 240;

  fill(flower6);
  circle(x5 - spacing, y5 - spacing, petal);
  circle(x5 + spacing, y5 - spacing, petal);
  circle(x5 - spacing, y5 + spacing, petal);
  circle(x5 + spacing, y5 + spacing, petal);
  fill(flower);
  circle(x5, y5, petal - petaladjustment);

  //flower 6, orange
  let x6 = 290;
  let y6 = 180;

  fill(flower7);
  circle(x6 - spacing, y6 - spacing, petal);
  circle(x6 + spacing, y6 - spacing, petal);
  circle(x6 - spacing, y6 + spacing, petal);
  circle(x6 + spacing, y6 + spacing, petal);
  fill(flower);
  circle(x6, y6, petal - petaladjustment);

  //flower 7, dark pink
  let x7 = 280;
  let y7 = 25;

  fill(flower8);
  circle(x7 - spacing, y7 - spacing, petal);
  circle(x7 + spacing, y7 - spacing, petal);
  circle(x7 - spacing, y7 + spacing, petal);
  circle(x7 + spacing, y7 + spacing, petal);
  fill(flower);
  circle(x7, y7, petal - petaladjustment);

  //hair
  fill(hair);
  rect(85, 40, 130, 165, 60, 60, 0, 0);

  //ears
  fill(skin2);
  ellipse(198, 135, 15, 30);
  ellipse(102, 135, 15, 30);

  //earrings
  fill(earrings);
  ellipse(102, 150, 5, 10);
  ellipse(198, 150, 5, 10);

  //shirt
  fill(shirt2);
  rect(78, 200, 36, 150, 60, 0, 0, 0);
  rect(188, 200, 36, 150, 0, 60, 0, 0);
  fill(shirt);
  rect(100, 196, 100, 150, 15, 15, 0, 0);
  fill(shirt2);
  rect(131, 175, 38, 40, 0, 0, 30, 30);
  rect(145, 210, 10, 30);
  fill(buttons);
  circle(150, 220, 5);
  circle(150, 230, 5);

  //neck
  fill(skin2);
  rect(131, 170, 38, 40, 0, 0, 30, 30);

  //face
  fill(skin);
  ellipse(150, 130, 90, 118);

  //cheek
  fill(cheek);
  circle(122, 140, 30);
  circle(178, 140, 30);

  //nose
  fill(skin2);
  noStroke();
  ellipse(150, 148, 20, 10);

  //eyes
  fill(eyes);
  ellipse(130, 126, 8, eye);
  ellipse(170, 126, 8, eye);
  fill(cheek);

  //mouth
  fill(mouth);
  arc(150, 162, 25, smile, 0, PI);

  //eyebrows
  arc(130, 115, 17, 7, PI, 0);
  arc(170, 115, 17, 7, PI, 0);

  //hair pt 2
  fill(hair);
  arc(110, 70, 100, 70, 0, PI / 2);

  //text
  textSize(15);
  textAlign(CENTER);
  fill(50, textopacity);
  text("keep clicking for a surprise!", 150, 28);
}
