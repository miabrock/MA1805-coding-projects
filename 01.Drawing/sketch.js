function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(100, 100, 0)

  // eyes
  circle(100, 50, 50);
  circle(200, 50, 50);

  // mouth
  fill(255, 25, 0, 40)
  ellipse(150, 150, 200, 20)

}
