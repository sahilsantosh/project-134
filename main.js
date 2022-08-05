img = "" ;
status = "";
objects = [];
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload() {
img = loadImage('dog_cat.jpg')

}

function setup() {
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modeLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(video, 0, 0, 380, 380);

    if(status != "")
    {
        r  = random(255);
        g  = random(255);
        b  = random(255);
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "status : Object Detected";
            document.getElementById("number_of_objects").innerHTML="number of objects dectected are :"+ objects.length;
            fill(r,g,b);
            persent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke(r,g,b)
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
    Fill("#FF0000")
    persent = floor(objects[i].confidence * 100);
    text(objects[0].label + " " + percent + "%", objects[0].x + 15, objects[0].y + 15);
    noFill();
    stroke("#FF0000");
    rect(objects[0].x, objects[0].y, objects[0].width, objects[0].height);

    fill("#FF0000");
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320 );
}

function modeLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(video, gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modeLoaded);
    document.getElementById("status").innerHTML = "status : detecting Objects";
}