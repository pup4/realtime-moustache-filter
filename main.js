noseX=0;
noseY=0;

function preload(){
    moustache=loadImage("https://i.postimg.cc/FRgYFxMN/download-mwb-removebg-preview-1.png");
}

function setup(){
    canvas=createCanvas(350,350);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function draw(){
    image(video,0,0,350,350);
    image(moustache,noseX+7,noseY+50,50,20);
}

function take_snapshot(){
    save('myFilter-m-Image.png');
}


function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x = "+noseX);
        console.log("nose y = "+noseY);
    }
}