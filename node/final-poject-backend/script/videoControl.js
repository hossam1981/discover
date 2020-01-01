$(document).ready(function() {
  //   if ($("video").prop('muted', false)){
  //   $("#mute").css("background-image","url(http://image.flaticon.com/icons/svg/10/10430.svg)");
  // }

$("#mute").click( function (){
  if( $("video").prop('muted') ) {
    $("video").prop('muted', false);
    $("#mute").css("background-image","url(http://image.flaticon.com/icons/svg/10/10430.svg)");
  } else {
    $("video").prop('muted', true);
    $("#mute").css("background-image","url(http://image.flaticon.com/icons/svg/10/10776.svg)");
  }

  
});


});





