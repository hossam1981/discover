$(document).ready(function () {

  $("#mute").click(function () {
    if ($("video").prop('muted')) {
      $("video").prop('muted', false);
      $("#mute").css("background-image", "url('/picture/volume.png')");
    } else {
      $("video").prop('muted', true);
      $("#mute").css("background-image", "url('/picture/mute.png')");
    }
  });
});
// --------------------------->>
// var playPromise = video.play();

// if (playPromise !== undefined) {
//   playPromise.then(_ => {
    // Automatic playback started!
    // Show playing UI.
  // })
    // .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
    // });
// }


