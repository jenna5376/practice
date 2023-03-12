let myOutput;
let counter = 0;

function setup() {
  createCanvas(350, 330);

  //add midi functionality
  WebMidi.enable()
    .then(onEnabled)
    .catch((err) => alert(err));

  //load assets
  font = loadFont("arcadefont.ttf");
  font2 = loadFont("pixelfont.otf");
  star = loadImage("star.png");
  star2 = loadImage("star2.png");
}

function onEnabled() {
  //example output
  console.log("WebMIDI Enabled");

  // inputs
  WebMidi.inputs.forEach((input) =>
    console.log("Input: ", input.manufacturer, input.name)
  );

  // outputs
  WebMidi.outputs.forEach((output) =>
    console.log("Output: ", output.manufacturer, output.name)
  );

  //first available output
  console.log(WebMidi.outputs[0]);

  //assign output
  myOutput = WebMidi.outputs[0];
}

function draw() {
  background(213, 226, 225);

  //stars
  for (i = -10; i < width + 100; i += 60) {
    image(star, i, -10);
    image(star, i - 30, 30);
    image(star2, i, 70);
    image(star2, i - 30, 110);
    image(star, i, height - 30);
    image(star2, i - 30, height - 70);
  }

  //stripes
  for (i = 0; i < height; i += 4) {
    stroke(190, 210, 210);
    line(0, i, width, i);
  }

  noStroke();

  //button settings
  buttonHeight = 100;
  buttonWidth = 260;
  buttonX = width / 2 - buttonWidth / 2;
  buttonY = 180;

  //outer button
  fill(248, 245, 237);
  rect(buttonX, buttonY, buttonWidth, buttonHeight);

  //inner button
  fill(238, 235, 225);
  rect(buttonX + 5, buttonY + 5, buttonWidth - 10, buttonHeight - 10);

  //button hover interaction
  if (
    mouseX > buttonX &&
    mouseX < buttonX + buttonWidth &&
    mouseY > buttonHeight &&
    mouseY < buttonY + buttonHeight
  ) {
    fill(242, 230, 235);
    rect(buttonX + 5, buttonY + 5, buttonWidth - 10, buttonHeight - 10);

    //button click interaction
    if (mouseIsPressed) {
      fill(242, 230, 235);
      rect(buttonX, buttonY, buttonWidth, buttonHeight);
      rect(buttonX, buttonY, buttonWidth, buttonHeight);
    }
  }

  //text
  fill(75, 62, 117);
  textFont(font);
  textSize(50);
  stroke(255, 245, 235);
  strokeWeight(4);
  text("COIN  BANK ", 50, buttonY - 25);
  strokeWeight(1);
  noStroke();
  textFont(font2);
  textSize(20);

  //flickering text
  counter++;
  textopacity = 255;
  if (counter > 60) {
    textopacity = 20;
  } else {
    textopacity = 255;
  }
  if (counter == 100) {
    counter = 0;
  }
  textFont(font2);
  textSize(20);
  fill(98, 83, 148, textopacity);
  text("> click to save money!", buttonX + 30, buttonY + 50);
}

//button click output
function mousePressed() {
  if (
    mouseX > buttonX &&
    mouseX < buttonX + buttonWidth &&
    mouseY > buttonHeight &&
    mouseY < buttonY + buttonHeight
  ) {
    console.log("clicked inside box");

    //play note
    myOutput.playNote(61, 1, { duration: 1000, rawAttack: 50 });
  }
}
