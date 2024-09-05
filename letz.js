function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
    stroke("black");
    fill("pink");
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }