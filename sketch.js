function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");
  fill("black")
  textSize(60);
  textAlign(CENTER, CENTER);
  
  if(mouseX < 50) {
    let palavra = "c";
  text(palavra, 200, 200);
  } else if(mouseX < 150) {
    let palavra = "caio";
  text(palavra, 200, 200);
  } else {
    let palavra = "caio lindo";
    text(palavra, 200, 200)
  }
  
}
