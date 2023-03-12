// get the list of ports
function gotList(portList) {
  // make a select menu and position it:
  portSelector = createSelect();
  portSelector.position(10, 10);

  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
    // console.log(i + " " + portList[i]);
    // add item to the select menu:
    portSelector.option(portList[i]);
  }

  // set a handler for when a port is selected from the menu:
  portSelector.changed(openPort);
}

function openPort() {
  var thisPort = portSelector.value();
  if (thisPort != null) {
    serial.open(thisPort);
    serial.write("x");
  }
  portSelector.hide();
}

// We are connected and ready to go
function serverConnected() {
  console.log("We are connected!");
}

// Connected to our serial device
function gotOpen() {
  console.log("Serial Port is open!");
}

// disconnected from our serial device
function gotClose() {
  console.log("Serial Port is closed!");
}

// Uh oh, here is an error, let's log it
function gotError(theerror) {
  console.log(theerror);
}
