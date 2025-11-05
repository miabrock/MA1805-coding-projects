let theText = ["Some", "Text", "To", "Display"]
let word = theText[0];
let i = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(5);
}

function draw() {
  background(200);

  // The text display
  textSize(40);
  text(word, 20, height/2)

  // change the value of word
  word = theText[i];
  i=i+1;
  if(i>theText.length){
    i=0;
  }
  console.log(i)
}

