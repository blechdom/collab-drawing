let socket = io("http://localhost:3000")
let colorPicker, sel
let weight = 1

function setup() {

  socket.on('mouseReceiver', (data) => {
    console.log('mouse received ', data.color)
    stroke(data.color)
		strokeWeight(data.weight)
		line(data.x, data.y, data.pX, data.pY)
  })
  
 
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
 
   socket.emit('mouse', 'hello world')
  
}

function draw() {
  stroke(colorPicker.value())
  strokeWeight(weight)
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY)
    sendMouse(mouseX, mouseY, pmouseX, pmouseY)
  }
}

function changeStrokeWeight() {
  weight = sel.value()
}

function sendMouse(x, y, pX, pY) {
  const mouseData = {
    x,
    y,
    pX,
    pY,
    color: colorPicker.value(),
    weight
  }
  socket.emit('mouse', mouseData)
}
  