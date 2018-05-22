let input, button, insideInfo, ratioInfo, totalInfo, slider;

function setup(){
createCanvas(400,400)
background(0);
createP('');
input = createInput('enter number of farts');
button = createButton('Fart out some code');
button.mousePressed(makeFarts);

insideInfo = createP('Farts inside the circle: 0');
insideInfo.position(415,0);
totalInfo = createP('Total farts: 0');
totalInfo.position(415, 20);
ratioInfo = createP('Ratio of farts inside 0');
ratioInfo.position(415, 40);

stroke(150, 50, 150);
strokeWeight(3);
noFill();
ellipse(width/2, height/2, width, height);
}

function makeFarts(){
  let farts = input.value();
  let insideCircle = 0;
  let outsideCircle = 0;
  let ratio = 0;
  for(let i = 0; i < farts; i++){
    stroke(50, 150, 50);
    let x = random(width);
    let y = random(height);
    point(x, y);
    if(dist(x,y, width/2, height/2) <= 200){
      insideCircle++;
    }
  }

  ratio = insideCircle / farts * 4;

  insideInfo.html('Farts inside the circle:' +
  insideCircle);
  totalInfo.html('Total points: ' + farts);
  totalInfo.html('Ratio of points inside:  ' + ratio);

  stroke(150, 50, 150);
  strokeWeight(3);
  noFill();
  ellipse(width/2, height/2, width, height);
}
