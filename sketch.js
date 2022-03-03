let socket = io("http://localhost:3000")
let colorPicker, sel
let weight = 1

function setup() {

  socket.on("connect", () => {
    // either with send()
    socket.send("Hello!");
  
    
  });
  
 
  createCanvas(800,600)
  background(0)
 
  colorPicker = createColorPicker("white")

  textAlign(CENTER);
  sel = createSelect();
  sel.position(55, 605);
  sel.option('strokeWeight = 1', 1);
  sel.option('strokeWeight = 3', 3);
  sel.option('strokeWeight = 6', 6);
  sel.option('strokeWeight = 9', 9);
  sel.selected('strokeWeight = 1');
  sel.changed(changeStrokeWeight);
}

function draw() {
  stroke(colorPicker.color())
  strokeWeight(weight)
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY)
  }
}

function changeStrokeWeight() {
  weight = sel.value()
}
  