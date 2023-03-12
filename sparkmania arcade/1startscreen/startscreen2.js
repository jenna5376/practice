let avatarx = 0;
let avatary = 0;
let character = "bunny";
let chrnum = 0;
let cscounter = 0;
let chropacity = 0;

function startScreen2() {
  //bg
  imageMode(CORNER);
  image(bg2, 0, 0, width, height);

  //character selection title
  fill(220, 254, 254);
  textFont(arcadefont);
  textSize(40);
  text("SELECT UR CHARACTER", 100, 120);

  noStroke();
  rectMode(CORNER);

  //character rect
  fill(245, 237, 201);
  rect(155, 160, 445, 300);

  //character highlight
  cscounter += 1;
  if (cscounter > 22) {
    chropacity = 1;
  } else if (cscounter / 2 > 0) {
    chropacity = 255;
  }
  if (cscounter > 50) {
    cscounter = 0;
  }

  rectx = [160, 305, 450];
  recty = [165, 310];

  fill(232, 111, 136, chropacity);

  rect(rectx[avatarx], recty[avatary], 145, 145);

  //select character
  if (avatarx == 0 && avatary == 0) {
    character = "bunny";
    chrnum = 0;
  }
  if (avatarx == 1 && avatary == 0) {
    character = "bird";
    chrnum = 1;
  }
  if (avatarx == 2 && avatary == 0) {
    character = "dog";
    chrnum = 2;
  }
  if (avatarx == 0 && avatary == 1) {
    character = "cat";
    chrnum = 3;
  }
  if (avatarx == 1 && avatary == 1) {
    character = "penguin";
    chrnum = 4;
  }
  if (avatarx == 2 && avatary == 1) {
    character = "frog";
    chrnum = 5;
  }

  //character avatars
  image(avatar0, 165, 170);
  image(avatar1, 310, 170);
  image(avatar2, 455, 170);
  image(avatar3, 165, 315);
  image(avatar4, 310, 315);
  image(avatar5, 455, 315);

  characterselected = "yes";

  avatar = [avatar0, avatar1, avatar2, avatar3, avatar4, avatar5];

  //player rect
  fill(245, 237, 201);
  rect(650, 160, 250, 300, 50);
  image(avatar[chrnum], 700, 220, 135, 135);

  fill(80, 78, 222);
  textFont(pixelfont);
  textSize(20);
  text("Player", 680, 200);

  textWrap(WORD);
  text("*press arrows to select / return to confirm", 700, 380, 200);
}
