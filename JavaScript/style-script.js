var videoDiv = document.getElementById('video-container-id').style;
var vid = document.getElementById('background-video');
var bds = document.body.style;

function changeBackground(mediaURL) {
    var path = "url('" + mediaURL + "')";

    videoDiv.visibility = "hidden"
    vid.pause();
    bds.backgroundImage = path;
    bds.transition = "0.8s";
}

function toggleVideo() {
    videoDiv.visibility = "visible";
    vid.play();
    bds.backgroundImage = "none"
}