//Global Variables
var wSpeed = 1;
var wAngle = 25;
var wrestlers = [];

// Only executed our code once the DOM is ready.
paper.install(window);
window.onload = function() {
  paper.setup('myCanvas');
  var tool = new Tool();

  view.onFrame = function(event) {
    var domWrestlers = document.getElementsByClassName('wrestler');

    // for (var i = 0; i < domWrestlers.length; i++) {
    //   var w = domWrestlers[i];

    //   for (var i = 0; i < wrestlers.length; i++) {
    //     if (wrestlers[i].id === w.id) {
    //         // move every frame in same direction.
    //       wrestlers[i].paperjs = 
    //       wrestlers[i].position.x += wrestlers[i].direction.x;
    //       wrestlers[i].position.y += wrestlers[i].direction.y;
    //     }
    //   }
    // }

    for (var i = 0; i < wrestlers.length; i++) {
        var wrestler = wrestlers[i];
        wrestler.move();
      }
    // console.log(domWrestlers);

    // wrestlerPos.x += wDir.x;
    // wrestlerPos.y += wDir.y;
    // wrestler.position = wrestlerPos;

    // DomWrestler.style.left = wrestlerPos.x + 'px';
    // DomWrestler.style.top = wrestlerPos.y + 'px';
    // DomWrestler.style.transform = 'rotate(' + (180-wAngle) +'deg)';

  }

}


