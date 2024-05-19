// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

const userInput1 = document.querySelector("#userInput1");
const copyButton = document.querySelector("#copy");
const output = document.querySelector(".output");

// add an event listener on the target element

copyButton.addEventListener("click", () => {
  output.textContent = userInput1.value;
});

// callback function to handle event

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

const inputEventExample = document.querySelector("#inputEventExample");
const userInput2 = document.querySelector("#userInput2");
const output2 = document.createElement("div");
output2.classList.add("output2");

// add an event listener on the target element

userInput2.addEventListener("input", () => {
  output2.textContent = userInput2.value;
  inputEventExample.appendChild(output2);
});

// callback function to handle event
