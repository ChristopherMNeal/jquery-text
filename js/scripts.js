$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle(800);
    $("#walrus-hidden").slideToggle(800);
  });
  $(".clickable").click(function() {

    $("#p-showing").slideToggle(800);
    $("#p-hidden").slideToggle(800);
  });

  $("h1").click(function(){
    $("h1").fadeOut(1000);

  });

});


// EXPERIMENTING WITH GETTING SEPARATE PARTS OF THE PAGE TO EXPAND SEPARATLY
// WHAT'S THE BEST METHOD TO DO THIS?