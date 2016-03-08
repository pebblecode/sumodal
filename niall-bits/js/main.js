//Global Variables
var wSpeed = 1;
var wAngle = 25;

// Only executed our code once the DOM is ready.
paper.install(window);
window.onload = function() {
  paper.setup('myCanvas');
  var tool = new Tool();
  var wrestler = new Path.Rectangle([75, 75], [100, 100]);
  // wrestler.strokeColor = 'black';

  var DomWrestler = document.getElementById("wrestler");

  var wrestlerPos = new Point(100,100);
  // var wSpeed = 0.5;


  var wAng = wAngle * Math.PI / 180;

  var x = Math.sin( wAng );
  var y = Math.cos( wAng );
  // console.log(x,y);
  var wDir = new Point(x,y);

  view.onFrame = function(event) {

    // On each frame, rotate the wrestler by 3 degrees:
    wrestlerPos.x += wDir.x;
    wrestlerPos.y += wDir.y;
    wrestler.position = wrestlerPos;

    DomWrestler.style.left = wrestlerPos.x + 'px';
    DomWrestler.style.top = wrestlerPos.y + 'px';
    DomWrestler.style.transform = 'rotate(' + (180-wAngle) +'deg)';

  }

  rotateLeft = function(){
    wAngle += 15;
    // console.log(wAngle);
    convertDegtoRad(wAngle);
  }

  rotateRight = function(){
    console.log('got here');
    wAngle -= 15;
    convertDegtoRad(wAngle);
  }

  convertDegtoRad = function(angle){
    wAng = angle * Math.PI / 180;
    getDirection(wAng);
  }

  getDirection = function(angleR){
    var x = Math.sin( angleR );
    var y = Math.cos( angleR );
    // console.log(x,y);
    wDir = new Point(x,y);
  }


  tool.onKeyDown = function(event){
    // console.log(event);
    if(event.key == 'left') {
      rotateLeft();
    }
        
    if(event.key == 'right') {
      rotateRight();
    }
  }
}


