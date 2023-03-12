function draw() {
  //set up start music
  if (screennumber > 3) {
    startMusicfile.stop(); //stop playing start music
    startMusic = "off";
  }

  //start screen
  if (screennumber == 0) {
    startScreen0();
    //playing background music
    if (screennumber == 0 && startMusic == "off") {
      startMusicfile.loop();
      console.log("playing");
      startMusic = "on";
    }
  }

  //game mode selection, currently unavailable
  /*
  //start screen 1
  if (screennumber == 1) {
    startScreen1();
  }
  */

  //character selection menu
  if (screennumber == 2) {
    startScreen2();
  }
  //game order
  if (screennumber == 3) {
    startScreen3();
    if (tutorialover == "yes") {
      screennumber += 1;
      tutorialover = "no";
    }
  }

  //mole tutorial
  if (screennumber == 4) {
    tutorialMusics();
    game1tut();
    if (tutorialover == "yes") {
      screennumber += 1;
      tutorialover = "no";
    }
  }

  //mole
  if (screennumber == 5 && rr == "no") {
    tutorialMusicfile.stop();
    gamenum = 0;
    game1();
    updateScore();
  }

  //round result
  if (screennumber == 5 && molecounter == 15) {
    moleMusicfile.stop(); // stop playing mole background music
    roundresultSounds(); //calling func to play sound effect

    if (rrcomplete == "no") {
      roundResult();
    }
    if (screennumber == 5 && rrcomplete == "yes") {
      rrcomplete = "no";
      screennumber += 1;
      rrcounter = 0;
      tutorialMusic = "off";
    }
  }

  //bread tutorial
  if (screennumber == 6) {
    roundresultSoundfile.stop();
    tutorialMusics();
    game2tut();
    if (tutorialover == "yes") {
      screennumber += 1;
      tutorialover = "no";
    }
  }

  //bread
  if (screennumber == 7) {
    tutorialMusicfile.stop();
    gamenum = 1;
    game2();
  }

  //round result
  if (screennumber == 7 && game2Over == "yes" && rrcomplete == "no") {
    breadMusicfile.stop();
    roundresultSound = "off";

    roundResult();
  }

  if (screennumber == 7 && rrcomplete == "yes") {
    rrcomplete = "no";
    screennumber += 1;
    rrcounter = 0;
    tutorialMusic = "off";
  }

  //dance tutorial
  if (screennumber == 8) {
    tutorialMusics();
    game3tut();
    //for now
    if (tutorialover == "yes") {
      screennumber += 1;
      tutorialover = "no";
    }
  }
  //dance
  if (screennumber == 9) {
    tutorialMusicfile.stop();
    gamenum = 2;
    game3();
    if (game3Over == "yes" && rrcomplete == "no") {
      danceMusicfile.stop();
      roundResult();
      roundresultSounds();
    }
    if (rrcomplete == "yes") {
      rrcomplete = "no";
      screennumber += 1;
      rrcounter = 0;
    }
  }
  //end screen
  if (screennumber == 10) {
    roundresultSoundfile.stop();
    p1total = p1score[0] + p1score[1] + p1score[2];
    endScreen();
  }
}

function keyPressed() {
  //start screen
  if (screennumber == 0 && keyCode == 66) {
    //enter button
    screennumber += 2;
    confirmationSoundfile.play();
  }

  //game mode
  /*
  if (screennumber == 1) {
    if (keyCode == 40) {
      gamemode = "multi";
      charactersSoundfile.play();
    }
    if (keyCode == 38) {
      gamemode = "single";
      charactersSoundfile.play();
    }
    if (keyCode == 13 && gamemode != "multi") {
      //enter button
      screennumber += 1;
      confirmationSoundfile.play();
    }
  }
  
  */

  //character selection
  if (screennumber == 2) {
    //left
    if (keyCode == 37 && avatarx != 0) {
      avatarx -= 1;
      charactersSoundfile.play();
    }
    //down
    if (keyCode == 40 && avatary != 1) {
      avatary += 1;
      charactersSoundfile.play();
    }
    //right
    if (keyCode == 39 && avatarx != 2) {
      avatarx += 1;
      charactersSoundfile.play();
    }
    //up
    if (keyCode == 38 && avatary != 0) {
      avatary -= 1;
      charactersSoundfile.play();
    }
  }

  //character confirmation
  if (screennumber == 2 && keyCode == 13 && characterselected == "yes") {
    screennumber += 1;
    confirmationSoundfile.play();
  }

  //mole game
  if (screennumber == 5) {
    if (position == 0) {
      if (keyCode == 52 && molehit == "False") {
        mole.hit();
      }
    }
    if (position == 1) {
      if (keyCode == 49 && molehit == "False") {
        mole.hit();
      }
    }
    if (position == 2) {
      if (keyCode == 51 && molehit == "False") {
        mole.hit();
      }
    }
    if (position == 3) {
      if (keyCode == 50 && molehit == "False") {
        mole.hit();
      }
    }
    if (position == 4) {
      if (keyCode == 53 && molehit == "False") {
        mole.hit();
      }
    }
  }
  //bread game
  if (screennumber == 7) {
    if (keyCode == 49) {
      playerpos = 0;
    }
    //pose2
    if (keyCode == 50) {
      playerpos = 1;
    }
    //pose3
    if (keyCode == 51) {
      playerpos = 2;
    }
  }

  //dance game
  if (screennumber == 9) {
    if (keyCode == 49) {
      posenum = 0;
    }
    if (keyCode == 50) {
      posenum = 1;
    }
    if (keyCode == 51) {
      posenum = 2;
    }
    if (keyCode == 52) {
      posenum = 3;
    }
    if (keyCode == 53) {
      posenum = 4;
    }
  }
}

function preload() {
  //background music
  moleMusicfile = loadSound("sound/mole.mp3"); // mole background music
  breadMusicfile = loadSound("sound/bread.mp3"); // bread background music
  danceMusicfile = loadSound("sound/dancing.mp3"); // dance background music
  startMusicfile = loadSound("sound/startscreen-gameorder.mp3"); //starts creen background music
  winnerMusicfile = loadSound("sound/winner.mp3"); //winner background music
  tutorialMusicfile = loadSound("sound/tutorial.mp3"); //winner background music

  //sound effects
  confirmationSoundfile = loadSound("sound/confirmation.mp3");
  screenchangeSoundfile = loadSound("sound/screen change.mp3");
  charactersSoundfile = loadSound("sound/moving thru characters.mp3");
  roundresultSoundfile = loadSound("sound/round results.mp3");
  correctposeSoundfile = loadSound("sound/correct pose.mp3");
  eatingbreadSoundfile = loadSound("sound/eating bread.mp3");
  wackmoleSoundfile = loadSound("sound/wack mole.mp3");
  drumSoundfile = loadSound("sound/drumroll3.mp3");
  wackmouseSoundfile = loadSound("sound/wack mouse.m4a");

  //load font
  pixelfont = loadFont("otherassets/pixelfont.otf");
  arcadefont = loadFont("otherassets/arcadefont.ttf");

  //0 start screen
  startscreenbg = loadImage("1startscreen/assets/startscreenbg.png");
  moon = loadImage("1startscreen/assets/moon.png");
  title = loadImage("1startscreen/assets/title.png");
  bgsparkles = loadImage("1startscreen/assets/bgsparkles.png");

  //1 start screen 1 (temp disabled)
  bg1 = loadImage("1startscreen/assets/bg1.png");
  star = loadImage("1startscreen/assets/star.png");
  bg2 = loadImage("1startscreen/assets/bg2.png");

  //2 start screen 2
  avatar0 = loadImage("1startscreen/assets/ss2/avatar0.png");
  avatar1 = loadImage("1startscreen/assets/ss2/avatar1.png");
  avatar2 = loadImage("1startscreen/assets/ss2/avatar2.png");
  avatar3 = loadImage("1startscreen/assets/ss2/avatar3.png");
  avatar4 = loadImage("1startscreen/assets/ss2/avatar4.png");
  avatar5 = loadImage("1startscreen/assets/ss2/avatar5.png");

  //3 start screen 3
  gameorderbg = loadImage("1startscreen/assets/gameorder.png");

  //4 mole tut
  moletut = loadImage("2tutassets/moletut.png");
  molenum = loadImage("2tutassets/molenum.png");

  //5 mole
  molebg = loadImage("2whac-a-mole/assets/molebg.png");
  bottombg = loadImage("2whac-a-mole/assets/bottombg.png");
  topbg = loadImage("2whac-a-mole/assets/topbg.png");
  mole0 = loadImage("2whac-a-mole/assets/mole0.png");
  mole1 = loadImage("2whac-a-mole/assets/mole1.png");
  mole2 = loadImage("2whac-a-mole/assets//mole2.png");
  mouse = loadImage("2whac-a-mole/assets/mouse.png");
  hitmole0 = loadImage("2whac-a-mole/assets/hitmole0.png");
  hitmole1 = loadImage("2whac-a-mole/assets/hitmole1.png");
  hitmole2 = loadImage("2whac-a-mole/assets/hitmole2.png");
  hitmouse = loadImage("2whac-a-mole/assets/hitmouse.png");

  wam = [mole0, mole1, mole2, mole0, mole1, mole2, mouse];
  hitwam = [
    hitmole0,
    hitmole1,
    hitmole2,
    hitmole0,
    hitmole1,
    hitmole2,
    hitmouse,
  ];

  //6 bread tut
  breadtut = loadImage("2tutassets/breadtut.png");
  breadnum = loadImage("2tutassets/breadnum.png");

  //7 bread
  breadimg = loadImage("2bread/assets/bread.png");
  breadbg = loadImage("2bread/assets/breadbg.png");
  breadmachine = loadImage("2bread/assets/machine.png");

  //8 dance tut
  dancetut = loadImage("2tutassets/dancetut.png");
  dancenum = loadImage("2tutassets/dancenum.png");

  //9 dance

  let pose1 = loadImage("2dance/assets/panda1.png");
  let pose2 = loadImage("2dance/assets/panda2.png");
  let pose3 = loadImage("2dance/assets/panda3.png");
  let pose4 = loadImage("2dance/assets/panda4.png");
  let pose5 = loadImage("2dance/assets/panda5.png");
  let background0 = loadImage("2dance/assets/bg0.png");
  let background1 = loadImage("2dance/assets/bg1.png");
  let background2 = loadImage("2dance/assets/bg2.png");
  backgroundframe = floor(background / 3);
  backgroundanimation = [background0, background1, background2];
  prompts = [pose1, pose2, pose3, pose4, pose5]; // matches numbers of poses

  //10 end screen
  lightsoff = loadImage("3endscreen/lightsoff.png");
  lightson = loadImage("3endscreen/lightson.png");

  //characters
  //mole
  molebunny = loadImage("0characters/mole/corner/molebunny.png");
  molebird = loadImage("0characters/mole/corner/molebird.png");
  moledog = loadImage("0characters/mole/corner/moledog.png");
  molecat = loadImage("0characters/mole/corner/molecat.png");
  molepenguin = loadImage("0characters/mole/corner/molepenguin.png");
  molefrog = loadImage("0characters/mole/corner/molefrog.png");
  molecorner = [molebunny, molebird, moledog, molecat, molepenguin, molefrog];

  //bread
  breadbunny = loadImage("0characters/bread/corner/breadbunny.png");
  breadbird = loadImage("0characters/bread/corner/breadbird.png");
  breaddog = loadImage("0characters/bread/corner/breaddog.png");
  breadcat = loadImage("0characters/bread/corner/breadcat.png");
  breadpenguin = loadImage("0characters/bread/corner/breadpenguin.png");
  breadfrog = loadImage("0characters/bread/corner/breadfrog.png");
  breadcorner = [
    breadbunny,
    breadbird,
    breaddog,
    breadcat,
    breadpenguin,
    breadfrog,
  ];
  eatbunny = loadImage("0characters/bread/eatbunny.png");
  eatbird = loadImage("0characters/bread/eatbird.png");
  eatdog = loadImage("0characters/bread/eatdog.png");
  eatcat = loadImage("0characters/bread/eatcat.png");
  eatpenguin = loadImage("0characters/bread/eatpenguin.png");
  eatfrog = loadImage("0characters/bread/eatfrog.png");
  breadeater = [eatbunny, eatbird, eatdog, eatcat, eatpenguin, eatfrog];

  //dance
  dancebunny = loadImage("0characters/dance/corner/dancebunny.png");
  dancebird = loadImage("0characters/dance/corner/dancebird.png");
  dancedog = loadImage("0characters/dance/corner/dancedog.png");
  dancecat = loadImage("0characters/dance/corner/dancecat.png");
  dancepenguin = loadImage("0characters/dance/corner/dancepenguin.png");
  dancefrog = loadImage("0characters/dance/corner/dancefrog.png");
  dancecorner = [
    dancebunny,
    dancebird,
    dancedog,
    dancecat,
    dancepenguin,
    dancefrog,
  ];

  //mini dancers
  minibunny1 = loadImage("0characters/dance/mini/minibunny1.png");
  minibunny2 = loadImage("0characters/dance/mini/minibunny2.png");
  minibunny3 = loadImage("0characters/dance/mini/minibunny3.png");
  minibunny4 = loadImage("0characters/dance/mini/minibunny4.png");
  minibunny5 = loadImage("0characters/dance/mini/minibunny5.png");
  minibird1 = loadImage("0characters/dance/mini/minibird1.png");
  minibird2 = loadImage("0characters/dance/mini/minibird2.png");
  minibird3 = loadImage("0characters/dance/mini/minibird3.png");
  minibird4 = loadImage("0characters/dance/mini/minibird4.png");
  minibird5 = loadImage("0characters/dance/mini/minibird5.png");
  minidog1 = loadImage("0characters/dance/mini/minidog1.png");
  minidog2 = loadImage("0characters/dance/mini/minidog2.png");
  minidog3 = loadImage("0characters/dance/mini/minidog3.png");
  minidog4 = loadImage("0characters/dance/mini/minidog4.png");
  minidog5 = loadImage("0characters/dance/mini/minidog5.png");
  minicat1 = loadImage("0characters/dance/mini/minicat1.png");
  minicat2 = loadImage("0characters/dance/mini/minicat2.png");
  minicat3 = loadImage("0characters/dance/mini/minicat3.png");
  minicat4 = loadImage("0characters/dance/mini/minicat4.png");
  minicat5 = loadImage("0characters/dance/mini/minicat5.png");
  minipenguin1 = loadImage("0characters/dance/mini/minipenguin1.png");
  minipenguin2 = loadImage("0characters/dance/mini/minipenguin2.png");
  minipenguin3 = loadImage("0characters/dance/mini/minipenguin3.png");
  minipenguin4 = loadImage("0characters/dance/mini/minipenguin4.png");
  minipenguin5 = loadImage("0characters/dance/mini/minipenguin5.png");
  minifrog1 = loadImage("0characters/dance/mini/minifrog1.png");
  minifrog2 = loadImage("0characters/dance/mini/minifrog2.png");
  minifrog3 = loadImage("0characters/dance/mini/minifrog3.png");
  minifrog4 = loadImage("0characters/dance/mini/minifrog4.png");
  minifrog5 = loadImage("0characters/dance/mini/minifrog5.png");
}

function setup() {
  createCanvas(960, 540);

  //randomize vars
  position = floor(random(5));
  molemouse = floor(random(7));
  randombread = floor(random(3));
  promptNumber = floor(random(5));

  setInterval(decreaseTimer, 1000);
}
