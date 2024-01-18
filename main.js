noseX = 0;
noseY = 0;
function preload(){
    stonks = loadImage("https://static.vecteezy.com/system/resources/previews/014/455/858/non_2x/mexican-mustache-on-transparent-background-free-png.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    image(stonks, noseX -25, noseY + 10, 50, 20);

}

function take_snapshot(){
    save('myFilterImage.png');
}
function modelloaded(){

}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}