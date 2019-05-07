var inputs = [];
var numbers = [];
var signs = [];
var currentDirection = "left";
var sign;
var letter;
var number;
var route1;
var route2;

window.onload = function() {
  inputs = prompt("Input instructions (format: L6 L7 R2 L5)").split(" ");
  console.log(inputs);

  for(var i = 0; i < inputs.length; i++) {
    chop(inputs[i]);
    updateData(currentDirection);
    console.log(inputs[i] + " " + number + " " + currentDirection + " " + sign);
    signs[i] = sign;
    numbers[i] = number;
  }

  calculateRoutes();
  alert("Solution: " + (route1 >= 0 ? "R" : "L") + route1 + " " + (route2 < 0 ? "L" : "R") + route2);
}

function chop(currentInput) {
  letter = currentInput.substring(0,1);
  number = currentInput.substring(1);
  number = parseInt(number);

  //testing if the string can handle calculations
  //console.log(number + 10);

  //console.log("Letter: " + letter + ", Number: " + number);

  return;
}

function updateData() {
  //console.log("current letter: " + letter);
  if(currentDirection == "left") {
    if(letter == "L" || letter == "l") {
      sign = "-";
      currentDirection = "down";
    }
    else {
      sign = "+";
      currentDirection = "up";
    }
  }
  else if(currentDirection == "right") {
    if(letter == "L" || letter == "l") {
      sign = "+";
      currentDirection = "up";
    }
    else {
      sign = "-";
      currentDirection = "down";
    }
  }
  else if(currentDirection == "up") {
    if(letter == "L" || letter == "l") {
      sign = "-";
      currentDirection = "left";
    }
    else {
      sign = "+";
      currentDirection = "right";
    }
  }
  else {
    if(letter == "L" || letter == "l") {
      sign = "+";
      currentDirection = "right";
    }
    else {
      sign = "-";
      currentDirection = "left";
    }
  }

  return;
}

function calculateRoutes() {
  var solution = 0;

  for(var i = 0; i < inputs.length; i+=2) {
    if(signs[i] == "+") {
      solution += (numbers[i]);
    }
    else {
      solution -= (numbers[i]);
    }
  }
  route1 = solution;
  solution = 0;

  for(var i = 1; i < inputs.length; i+=2) {
    if(signs[i] == "+") {
      solution += (numbers[i]);
    }
    else {
      solution -= (numbers[i]);
    }
  }
  route2 = solution;

  return;
}
