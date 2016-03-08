var MOVEMENT_ANGLE = 15;

function Wrestler (options) {
	debugger;
  this.colour = options.colour;
  this.id = 'wrestler' + this.colour;
  this.angle = determineAngle(25);
  this.direction = determineDirection(this.angle);
  this.state = 'START';
  this.position = determinePaperObj(this.colour);
  console.log(this.position);
}

Wrestler.prototype.rotateLeft = function() {
  this.angle += MOVEMENT_ANGLE;
  this.direction = determineDirection(determineAngle(this.angle));
}

Wrestler.prototype.rotateRight = function() {
  this.angle -= MOVEMENT_ANGLE;
  this.direction = determineDirection(determineAngle(this.angle));
}

Wrestler.prototype.move = function () {
	var domElement = document.getElementById(this.id);

	domElement.style.left = this.position.position.x + 'px';
	domElement.style.top = this.position.position.y + 'px';
	domElement.style.transform = 'rotate(' + (180-this.angle) +'deg)';
	
  this.position.position.x += this.direction.x;
  this.position.position.y += this.direction.y;
}

function determinePaperObj(colour) {
  if (colour == 'blue') {
  	return new Path.Circle(new Point(view.center.x + 200,view.center.y), 60);
  }

  if (colour === 'red') {
  	return new Path.Circle(new Point(view.center.x,view.center.y + 200), 60);
  }

  if (colour === 'green') {
    return new Path.Circle(new Point(view.center.x,view.center.y - 200), 60);
  }

  if (colour === 'black') {
    return new Path.Circle(new Point(view.center.x - 200,view.center.y), 60);
  }
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
