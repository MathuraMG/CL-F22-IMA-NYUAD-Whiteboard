let socket = io();

socket.on("connect", ()=> {
  console.log("Connection established to server via sockets");
})

//on getting info from server
socket.on("serverData", (data) => {
  drawPainting(data);
})

function setup() {
  createCanvas(400,400);
  background("#7332ef");
  stroke("ef3273");
  // noStroke();
}

function mouseDragged() {
  // ellipse(mouseX, mouseY, 10);
  let mouseObj = {
    x : mouseX,
    y : mouseY,
    px : pmouseX,
    py : pmouseY
  }
  socket.emit("mouseData", mouseObj);

}

function drawPainting(data) {
  line(data.x, data.y, data.px, data.py);
}
