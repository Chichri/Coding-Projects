let ship;
let rowone = [];
let rowtwo = [];
let rowthree = [];
let rowfour = [];
let rowfive = [];
let blasts = [];
let edge = false;
let laser, explode, boom;

function preload() {
  laser = loadSound("Laser.mp3");
  explode = loadSound("Explode.mp3");
  boom = loadImage("Explosion.png");
}

function setup() {
  createCanvas(1400, 750);
  imageMode(CENTER);
  boom.resize(128, 106);
  ship = new Ship();
  for (let i = 0; i < 10; i++) {
    rowone[i] = new Alien(i * 80 + 80, 60);
    rowtwo[i] = new Alien(i * 80 + 80, -20);
    rowthree[i] = new Alien(i * 80 + 80, -100);
    // rowfour[i] = new Alien(i * 40 + 40, 30);
    // rowfive[i] = new Alien(i * 40 + 40, 20);
  }
}

function draw() {
  background(0);
  //image(boom, width / 2, height / 2);
  ship.show();
  ship.move();

  //controls movement of row 1
  for (let i = 0; i < blasts.length; i++) {
    blasts[i].show();
    blasts[i].move();
    for (let j = 0; j < rowone.length; j++) {
      if (blasts[i].hits(rowone[j])) {
        rowone[j].evaporate();
        blasts[i].evaporate();
      }
    }
  }

  for (let i = 0; i < rowone.length; i++) {
    rowone[i].show();
    rowone[i].move();

    if (rowone[i].x > width || rowone[i].x < 0) {
      edge = true;
    } else {
      edge = false;
    }

    if (edge === true) {
      for (let i = 0; i < rowone.length; i++) {
        rowone[i].shiftDown();
      }
    }
  } //end row 1

  //controls movement of row 2
  for (let i = 0; i < blasts.length; i++) {
    blasts[i].show();
    blasts[i].move();
    for (let j = 0; j < rowtwo.length; j++) {
      if (blasts[i].hits(rowtwo[j])) {
        rowtwo[j].evaporate();
        blasts[i].evaporate();
      }
    }
  }

  for (let i = 0; i < rowtwo.length; i++) {
    rowtwo[i].show();
    rowtwo[i].move();

    if (rowtwo[i].x > width || rowtwo[i].x < 0) {
      edge = true;
    } else {
      edge = false;
    }

    if (edge === true) {
      for (let i = 0; i < rowtwo.length; i++) {
        rowtwo[i].shiftDown();
      }
    }
  } //end row 2

  //controls movement of row 3
  for (let i = 0; i < blasts.length; i++) {
    blasts[i].show();
    blasts[i].move();
    for (let j = 0; j < rowthree.length; j++) {
      if (blasts[i].hits(rowthree[j])) {
        rowthree[j].evaporate();
        blasts[i].evaporate();
      }
    }
  }

  for (let i = 0; i < rowthree.length; i++) {
    rowthree[i].show();
    rowthree[i].move();

    if (rowthree[i].x > width || rowthree[i].x < 0) {
      edge = true;
    } else {
      edge = false;
    }

    if (edge === true) {
      for (let i = 0; i < rowthree.length; i++) {
        rowthree[i].shiftDown();
      }
    }
  } //end row 3

  for (let i = blasts.length - 1; i >= 0; i--) {
    if (blasts[i].toDelete) {
      blasts.splice(i, 1);
    }
  }

  //controls removing aliens of row 1
  for (let i = rowone.length - 1; i >= 0; i--) {
    if (rowone[i].toDelete) {
      image(boom, rowone[i].x, rowone[i].y);
      rowone.splice(i, 1);
      explode.play();
    }
  }

  //controls removing aliens of row 2
  for (let i = rowtwo.length - 1; i >= 0; i--) {
    if (rowtwo[i].toDelete) {
      rowtwo.splice(i, 1);
      explode.play();
    }
  }

  //controls removing aliens of row 3
  for (let i = rowthree.length - 1; i >= 0; i--) {
    if (rowthree[i].toDelete) {
      rowthree.splice(i, 1);
      explode.play();
    }
  }
} // end of Draw function


function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}

function keyPressed() {
  if (key === ' ') {
    let newblast = new Blast(ship.x, height);
    blasts.push(newblast);
    laser.play();
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}