//background ball
var balls = [];
var num = 60;
var mx = [];
var my = [];
let w = 1920;
let h = 910;
let cnv;
var bgc;

var type; //user input
var output; //output text
var submit; //button
var textBox;

function setup() {
  // noCursor();
  cnv = createCanvas(w, h);
  cnv.parent('BackgroundCanvas');
  bgc = color(255);
  for (var i = 0; i < num; i++) {
    mx.push(i);
    my.push(i);
  }

  type = select("#feeling");
    type.input(newTyping);
    output = select("#output");
    submit = select("#submit");
    submit.mousePressed(newText);

    //display text over background
    submit.mousePressed(placeText);
    placeText = select("#feeling");
    textAlign(CENTER);
    textSize(60);
}

function newTyping (){
  output.html(type.value());
  output.parent('output');
}

function newText(){

}

//place text over the backgound
function placeText() {
  const name = type.value();
  placeText.html('hello ' + name + '!');
  this.c = color(random(255), random(255), random(255));
  type.value('');
//number of text
  for (let i = 0; i < 100; i++) {
    push();
    fill(this.c);
    translate(random(1900), random(1600));
    text(name, 0, 0);
    pop();
  }
}
function draw() {
  // //bounce ball
  for(var i = 0; i < balls.length; i++) {
    var ball = balls[i];
    ball.draw();
  }
}

//bounce ball
function Ball() {
  x = random(0, w);
  y = random(0, h);
  c = color(random(100, 255), random(100, 255), random(100, 255));
  speed= {
    x:random(-15,15),
    y:random(-15,15)
  }; //speed

  this.draw = function() {
    noStroke();
    fill(c);
    circle(x, y, 15, 15);
    x = x + speed.x;
    y = y + speed.y;

    if(y > height || y < 0){
      speed.y = speed.y * -1;
    }
    if(x > width || x < 0){
      speed.x = speed.x * -1;
    }
  }
}

//recreate a boall after click
function addBall() {
  var ball = new Ball();
  ball.x = mouseX;
  ball.y = mouseY;
  balls.push(ball);
}

//mousepress
function mousePressed() {
  addBall();
  // sound.play();
}
