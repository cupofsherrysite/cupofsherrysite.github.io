$(document).ready(function() {
  $("body").mousemove(function(e){
    var pageCoords = "( " + e.pageX + ", " + e.pageY + " )";
    //var clientCoords = "( " + e.clientX + ", " + e.clientY + " )";
    $("img").attr('width', e.pageX);
    $("img").attr('height', e.pageY);
  });
  
  //document.ontouchmove = function(e) {e.preventDefault()};
  
  document.getElementsByTagName('body')[0].addEventListener('touchmove', function(event) {
    var touch = event.targetTouches[0];
 
    // Place element where the finger is
    $("img").attr('width', touch.pageX);
     $("img").attr('height', touch.pageX);
    event.preventDefault();
  }, false);
});
