var socket = io('http://localhost:3000');
var colour = undefined;

socket.on('connect', function () {
  console.log('we get here automagically');
});

socket.on('playerJoined', function (data) {
	var wrestler = document.createElement('DIV');

	wrestler.setAttribute('id', 'wrestler-' + data);
	wrestler.setAttribute('class', 'wrestler');

  document.getElementById('app').appendChild(wrestler);
});

socket.on('playerLeft', function(data) {
	var wrestler = document.getElementById('wrestler-' + data);
  document.getElementById('app').removeChild(wrestler);
});

socket.on('action', function (data) {
  if (data.type === 'remoteAction') {
	  data.movement === 'right' ? 
	    rotateRight() :
	    rotateLeft();
  };
});
