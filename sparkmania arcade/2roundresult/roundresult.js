scorevisualizer = 0;
rrcounter = 0;
rrcomplete = "no";

function roundResult() {
  imageMode(CORNER);
  rectMode(CORNER);

  //add score
  p1score[gamenum] = totalscore;
  noStroke();

  //set bg
  fill(193, 235, 235);
  rect(0, 0, width, height);

  //draw score visualizer
  noStroke();
  fill(245, 237, 201);
  rect(0, 230, scorevisualizer * 2, 200);

  //display round score
  textFont(pixelfont);
  textSize(50);
  fill(80, 78, 222);
  text("Round score: " + totalscore, 120, 200);

  //score visualizer mechanics, reset var
  if (scorevisualizer <= totalscore) {
    scorevisualizer += 1;
  } else {
    rrcounter += 1;
    if (rrcounter >= 100) {
      roundresultSoundfile.stop(); //stop playing se
      point = 0;
      totalscore = 0;
      score = 0;
      rrcomplete = "yes";
      scorevisualizer = 0;
      rrcounter = 0;
    }
  }

  //round results title
  fill(80, 78, 222);
  textFont(arcadefont);
  textSize(60);
  text("ROUND RESULTS", 100, 120);
}
