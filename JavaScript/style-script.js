var bods = document.body.style;

function changeSiteElements(changeAtt) {
    var att = "" + changeAtt;

    switch (att) {
        case "ve":
            applyVideoEditingElements();
            break;

        case "sm":
            applySocialMediaElements();
            break;

        case "dr":
            applyDrawingElements();
            break;
        default:
            console.log("Error: Internal error while applying page changes.");
            console.log("Error: style-scripts.js: line: 18, line: 6, line: 3");
    }
}

function applyDrawingElements() {
    var bgPath = "url('Media/Images/Image7.png')"

    bods.backgroundImage = bgPath;
    bods.transition = "0.8s";

    toggleVideo(false);
}

function applySocialMediaElements() {
    var bgPath = "url('Media/Social/Third Frame.png')"

    bods.backgroundImage = bgPath;
    bods.transition = "0.8s";

    toggleVideo(false);

}

function applyVideoEditingElements() {
    toggleVideo(true);

}

function toggleVideo(isVideo) {
    var videoDiv = document.getElementById('vidcon-id').style;
    var vid = document.getElementById('bgvid-id');

    if(isVideo) {
        vid.play();
        videoDiv.visibility = "visible";

    } else {
        vid.pause();
        videoDiv.visibility = "hidden";
    }
}