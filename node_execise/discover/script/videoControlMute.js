$(document).ready(function() {
    $("video").prop('muted');
    var vid = document.getElementById("video");
    // while()
    console.log(vid.readyState);
    vid.play();
    
})