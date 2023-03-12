//whac-a-mole

//display
let displayX = 100;
let displayY = 70;
let displayWidth = 550;
let displayHeight = 325;

//assets
let bottombg;
let topbg;
let mole0;
let mole1;
let mole2;
let mouse;
let hitmole0;
let hitmole1;
let hitmole2;
let hitmouse;
let wam;
let hitwam;

//styling
let positionX;
let positionY;

//mechanics
let molehit = "False";
let startmolebreak = "False";
let z = 0;
let y = 0;
let a = 0;
let position;
let speed = 1;
let breakcounter = 0;
let molecounter = 0;
let molebreak = 0;
let mole;
let molebgspeed = 0;
let moleMusic = "off";

function game1() {
  //playing background music
  if (moleMusic == "off") {
    moleMusicfile.play();
    console.log("playing");
  }
  moleMusic = "on";

  gamenum = 0;

  //set up screen
  let displayWidth = 490;
  let displayHeight = 350;
  imageMode(CORNER);
  rectMode(CORNER);
  mole = new Mole(positionX, positionY, speed);

  //bg animation
  moleBg(molebgspeed);
  molebgspeed -= 1;

  //mole position
  moleWidth = 100;
  moleHeight = 95;
  adjustX = displayX - moleWidth / 2 + 0;
  adjustY = displayY - moleHeight / 2 + 20;

  positionX = [
    displayWidth / 4 + adjustX - 3,
    displayWidth / 4 + adjustX - 3,
    displayWidth / 2 + adjustX - 0.5,
    (3 * displayWidth) / 4 + adjustX + 4,
    (3 * displayWidth) / 4 + adjustX + 4,
  ];
  positionY = [
    (3 * displayHeight) / 4 + adjustY,
    displayHeight / 4 + adjustY,
    displayHeight / 2 + adjustY,
    displayHeight / 4 + adjustY,
    (3 * displayHeight) / 4 + adjustY,
  ];

  //display outline
  noStroke();
  fill(212, 196, 125, 180);
  rect(displayX - 15, displayY - 15, displayWidth + 30, displayHeight + 30);

  //bottom bg
  image(bottombg, displayX, displayY, displayWidth, displayHeight);

  //mole
  mole.show();

  //top bg
  image(topbg, displayX, displayY, displayWidth, displayHeight);

  //charac
  image(molecorner[chrnum], 650, 220, 270, 300);

  //display controls
  if (molecounter <= 4) {
    image(molenum, 0, 0, width, height);
  }
  if (molecounter == 5) {
    push();
    tint(255, 125);
    image(molenum, 0, 0, width, height);
    pop();
  }
}

class Mole {
  constructor(positionX, positionY, speed) {}
  show() {
    //set break/speed
    if (startmolebreak == "True") {
      if (molecounter < 5) {
        molebreak = floor(random(75, 50));
        speed = 1.4;
      } else if (molecounter < 10) {
        molebreak = floor(random(50, 25));
        speed = 1.6;
      } else if (molecounter < 15) {
        molebreak = floor(random(25, 0));
        speed = 1.85;
      }
      if (molebreak <= breakcounter) {
        startmolebreak = "False";
      }
      breakcounter += 1;
    }
    if (molecounter < 15 && startmolebreak != "True") {
      //show regular mole/mouse
      if (molehit == "False") {
        image(
          wam[molemouse],
          positionX[position],
          positionY[position] - y,
          moleWidth,
          moleHeight
        );
        //show hit mole/mouse
      } else {
        image(
          hitwam[molemouse],
          positionX[position],
          positionY[position] - y,
          moleWidth,
          moleHeight
        );
      }

      //mole animation, reset
      if ((y > 30 && a < 10) || (y < 0 && a < 10)) {
        y = y;
      } else {
        y += speed;
      }
      z += abs(speed);
      if (y > 30 || y < 0) {
        a += 1;

        if (a >= 10) {
          speed = -speed;
        }
      }
      if (z >= 60) {
        position = floor(random(5));
        molemouse = floor(random(7));

        a = 0;
        z = 0;
        y = 0;

        molecounter += 1;
        molehit = "False";
        startmolebreak = "True";
        breakcounter = 0;
      }
    }
  }
  hit() {
    //hit mole
    image(
      hitwam[molemouse],
      positionX[position],
      positionY[position] - y,
      moleWidth,
      moleHeight
    );
    molehit = "True";

    //decrease point for mouse
    if (molemouse == 6) {
      negPointConversion();
      decreasePoint();
      wackmouseSoundfile.play();
    }
    //increase point for mole
    else {
      pointConversion();
      increasePoint();
      wackmoleSoundfile.play();
    }
  }
}

//bg
function moleBg(x) {
  image(molebg, x, 0, 5000, 540);
}
