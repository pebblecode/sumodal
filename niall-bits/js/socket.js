var socket = io('http://localhost:3000');
var colour = undefined;

socket.on('connect', function () {
  console.log('we get here automagically');
});

socket.on('action', function (data) {
  console.log(data.type);
  if (data.type === 'remoteAction') {
  	console.log(data.type);
  	console.log(data.movement);
	  data.movement === 'right' ? 
	    rotateRight() :
	    rotateLeft();
  };
});
