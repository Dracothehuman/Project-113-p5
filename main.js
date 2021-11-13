function preload(){
}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}

function draw(){
    fill("orange");
    circle(40, 40, 70,);
    circle(460, 40, 70,); 
    circle(40, 450, 70,);
    circle(460, 450, 70,);
    fill("blue");
    rect(70, 15, 360, 60, 20);
    rect(425, 60, 60, 360, 20);
    rect(10, 60, 60, 360, 20);
    rect(70, 420, 360, 60, 20);

    image(video, 100, 100, 300, 300)
}
function snap(){
    save("Project113.jpg");
}
