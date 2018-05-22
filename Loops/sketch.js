function setup() {
  createCanvas(1270, 660);
  colorMode(RGB);
}

function draw() {
  //background 0 produces a black background
  background(0);
  //the variables are used to create the array.
  //one of them replicates an ellipse
  //the other replicates the replicated line of ellipses
  for(var j = 0; j<32; j++){
    for(var i = 0; i<70; i++){
      //the random fill produces ranibow colors
    fill(random(255), random(255), random(255));
  ellipse(i*20+30, j*20 + 30, 20, 20);
    }
  }
}
