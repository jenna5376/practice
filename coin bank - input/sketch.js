var soundFX;
let frames = [];
let frame = 0;
let money = 0;
let coinY = 0;
let animation = false;

function setup() {
  createCanvas(350, 330);

  WebMidi.enable()
    .then(onEnabled)
    .catch((err) => alert(err));

  //load assets
  font = loadFont("pixelfont.otf");
  spriteSheet = loadImage("spritesheet.png");
  coin = loadImage("coin.png");
  coinSFX = loadSound("coinSFX.mp3");

  //add frame x coords to array
  for (i = 0; i > -3500; i -= 350) {
    frames.push(i);
  }
}

function onEnabled() {
  console.log("WebMIDI Enabled");

  // inputs
  WebMidi.inputs.forEach((input) =>
    console.log("Input: ", input.manufacturer, input.name)
  );

  // outputs
  WebMidi.outputs.forEach((output) =>
    console.log("Output: ", output.manufacturer, output.name)
  );

  let inputAllChannels = WebMidi.inputs[0];

  //note detected
  inputAllChannels.addListener("noteon", (e) => {
    console.log("Note on:", e.note.identifier, e.message.channel);
    console.log("Velocity:", e.note.rawAttack);

    //play sound effect, add money, start animation
    coinSFX.play();
    money += 0.25;
    animation = true;
  });

  //note undetected
  inputAllChannels.addListener("noteoff", (e) => {
    console.log("Note off:", e.note.identifier, e.message.channel);
  });
}

function draw() {
  background(242, 230, 235);

  //stripes
  for (i = 0; i < height; i += 4) {
    stroke(237, 216, 225);
    line(0, i, width, i);
  }

  //draw/animate coin bank
  image(spriteSheet, frames[floor(frame)], 5);
  image(coin, 0, coinY - 120);

  if (animation == true) {
    if (coinY < 120 && frame < 3) {
      coinY += 5;
    } else {
      frame += 0.22;
      if (frame >= 4) {
        coinY = 0;
      }
      if (frame >= 9) {
        frame = 0;
        animation = false;
      }
    }
  }

  //display money
  textFont(font);
  textSize(20);
  fill(98, 83, 148);
  text("money: $" + money, 30, 35);
}
