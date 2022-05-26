//global variables to control interactivity
let blinkAmount = 0;
let talkAmount = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  //mapping x and y mouse coords to range from zero to one
  blinkAmount = map(mouseX, 0, width, 0, 1, 1);
  talkAmount = map(mouseY, 0, height, 0, 1, 1);
  
  //draw the face
  background(220);
  stroke(0); //black outline
  
  fill(300,240,60); //skin color fill
  ellipse(width/2, height/2, 800,500); //face
  
  fill(240,150,200); //white for eyes
  ellipse(width/5 - 1, height/3 - 15, 100, 150*blinkAmount); //pink of eye
  ellipse(width/1.3 + 20, height/3 - 15, 100, 150*blinkAmount);
  
  noStroke();
  
  fill(120,51,0); //blue for eyes
  ellipse(width/5 - 1, height/3 - 15, 70, 100*blinkAmount); //brown iris
  ellipse(width/1.3 + 20, height/3 - 15, 70, 100*blinkAmount);
  
  fill(0); //black for mouth & pupils
  
  ellipse(width/5 - 1, height/3 - 15, 30, 30*blinkAmount); //black pupil
  ellipse(width/1.3 + 20, height/3 - 15, 30, 30*blinkAmount);
  
  ellipse(width/2, height/1.5 + 25, 100, 150*talkAmount); //mouth
}