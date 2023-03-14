#무지개 이미지가 나타나는 박스 텍스쳐



let img;
function preload(){
  img = loadImage("rainbow.jpeg");

}
function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(200);
  //rotate(mouseX/50);
  //rotate(mouseY/50);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  rotateZ(frameCount * 0.02);
  texture(img);
  box(100);
}
