let img;

function preload() {
  img = loadImage('leonid-privalov-eXuWi5jvXN0-unsplash (1).jpg');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // draw the image.
  image(img, 0, 0);
}
