var parent = document.querySelector(".screen");
var answer = document.querySelector(".answer");
var operator = ["+", "-", "*", "/", "%", "."];
function clicking(event) {
  console.log(event.innerText);
  var dataOfParent = parent.innerText;
  var test = dataOfParent[dataOfParent.length - 1];
  if (!(operator.includes(test) && operator.includes(event.innerText))) {
    parent.innerText = parent.innerText + event.innerText;
  }
  console.log(event.innerText);
}

function evolvate(e) {
  answer.innerText = "Ans : " + eval(parent.innerText).toFixed(2);
  parent.innerText = "";
  console.log(eval(parent.innerText).toFixed(2));
}

window.addEventListener("keydown", (event) => {
  console.log(event);

  var key = event.key;
  var code = event.code;
  var dataOfParent = parent.innerText;
  console.log(dataOfParent[dataOfParent.length - 1]);
  var test = dataOfParent[dataOfParent.length - 1];
  if (
    !(operator.includes(test) && operator.includes(key)) &&
    (code.includes("Digit") || operator.includes(key))
  ) {
    // console.log(key)
    parent.innerText = parent.innerText + key;
  } else if (code.includes("Enter") || key.includes("=")) {
    evolvate();
  } else if (code.includes("Backspace")) {
    slicing();
  } else if (code.includes("KeyC")) {
    clearInput();
  }
});

function slicing(e) {
  var result = parent.innerText;
  parent.innerText = "";
  sliceResult = result.split("").slice(0, -1).join("");
  console.log(result);
  parent.innerText = sliceResult;
}

function clearInput() {
  parent.innerText = "";
  answer.innerText = "";
}
