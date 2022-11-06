function changeBackground(mediaURL) {
    var bds = document.body.style;
    var path = "url('" + mediaURL + "')";
    //var video = document.getElementById('background-video');

    if(mediaURL.includes(".png")) {
        //video.pause();
        bds.backgroundImage = path;
        bds.transition = "0.8s";

    } else {
        bds.backgroundImage = "";
        //video.play();
    }
}