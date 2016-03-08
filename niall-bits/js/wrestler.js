var MOVEMENT_ANGLE = 15;

function Wrestler (options) {
  this.position = determinePosition(100,100);
  this.color = options.colour;
  this.angle = determineAngle(25);
  this.direction = determineDirection(this.angle);
  this.state = 'START';
}

Wrestler.prototype.rotateLeft = function() {
  this.angle += MOVEMENT_ANGLE;
  this.direction = determineDirection(determineAngle(this.angle));
}

Wrestler.prototype.rotateRight = function() {
  this.angle -= MOVEMENT_ANGLE;
  this.direction = determineDirection(determineAngle(this.angle));
}

// need to be in 1 of 4 corners.
function determinePosition(x, y) {
  return new Point(x, y);
}

// based on start position
function determineAngle(angle) {
	return angle * Math.PI / 180;
}

function determineDirection(angle) {
  var x = Math.sin(angle);
  var y = Math.cos(angle);

  return new Point(x,y);
}
