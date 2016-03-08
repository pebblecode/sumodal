//Global Variables
var wSpeed = 1;
var wAngle = 25;
var wrestlers = [];

// Only executed our code once the DOM is ready.
paper.install(window);
window.onload = function() {
  paper.setup('myCanvas');
  var tool = new Tool();
  var wrestler = new Path.Rectangle([75, 75], [100, 100]);
  // wrestler.strokeColor = 'black';

  view.onFrame = function(event) {
    var domWrestlers = document.getElementsByClassName('wrestler');
    console.log(domWrestlers);
    // On each frame, rotate the wrestler by 3 degrees:
    // wrestlerPos.x += wDir.x;
    // wrestlerPos.y += wDir.y;
    // wrestler.position = wrestlerPos;

    // DomWrestler.style.left = wrestlerPos.x + 'px';
    // DomWrestler.style.top = wrestlerPos.y + 'px';
    // DomWrestler.style.transform = 'rotate(' + (180-wAngle) +'deg)';

  }

}


