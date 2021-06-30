
function setup() {
    video = createCapture(VIDEO);
    video.size(560, 500);

    canvas = createCanvas(560, 500);
    canvas.position(590, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}

function modelLoaded() {
    console.log(" PoseNet is Loaded ");
}

function draw() {
    background("#45BF4D");
}