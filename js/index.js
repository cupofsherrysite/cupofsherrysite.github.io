$(document).ready(function() {
  $("body").mousemove(function(e){
    var pageCoords = "( " + e.pageX + ", " + e.pageY + " )";
    //var clientCoords = "( " + e.clientX + ", " + e.clientY + " )";
    $("img").attr('width', e.pageX);
    $("img").attr('height', e.pageY);
  });
  
  document.ontouchmove = function(e) {e.preventDefault()};
});
