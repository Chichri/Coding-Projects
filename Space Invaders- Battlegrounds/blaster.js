function Blast(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;

  this.show = function() {
    noStroke();
    fill(255);
    rect(this.x, this.y, this.r * .5, this.r * 2);
  }

  this.evaporate = function() {
    this.toDelete = true;
  }

  this.hits = function(alien) {
    var d = dist(this.x, this.y, alien.x, alien.y);
    if (d < this.r + alien.r) {
      return true;
    } else {
      return false;
    }
    console.log("Alien hit");

  }

  this.move = function() {
    this.y = this.y - 10;
  }

}