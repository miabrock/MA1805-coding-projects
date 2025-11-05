 let i = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // eyes
  fill(100, 100, 0);
  circle(50, i, 50, 50);
  circle(200, i, 50, 50);

  // mouth
  fill(255, 25, 0, 40);
  rect(i, 150, i, 20);

  // increment i
  i = i+1;
}
