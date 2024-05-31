// Exercise #1:
// When the user clicks the 'copy' button, copy the user input to the output area

$("document").ready(() => {
  $("#copy").on("click", (event) => {
    $("#output1").text($("#userInput1").val());
  });

  $("#userInput2").on("input", (event) => {
    $("#output2").text($("#userInput2").val());
  });
});

// Exercise #2:
