const url = "https://anapioficeandfire.com/api/books/";

$("document").ready(() => {
  const url = "https://anapioficeandfire.com/api/books/";

  const addBookToDom = (book) => {
    $("#books").append(
      $("<div>")
        .addClass("text-center book")
        .append($("<h2>").text(book.name))
        .append($("<p>").text(`Author: ${book.authors}`))
        .append(
          $("<p>").text(
            `Publication Year: ${new Date(book.released).getUTCFullYear()}`,
          ),
        )
        .append($("<p>").text(`Number of Pages: ${book.numberOfPages}`)),
    );
  };

  const fetchData = (url) => {
    $.ajax({
      type: "GET",
      url: url,
      success: (data) => {
        $("#loading").hide();
        data.forEach((book) => {
          addBookToDom(book);
        });
      },
      error: (error) => {
        $("#loading").text("Error loading books");
      },
    });
  };

  fetchData(url);
});
