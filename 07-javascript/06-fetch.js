const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const loading = document.querySelector("#loading");
      loading.style.display = "none";
      data.forEach((book) => {
        const bookElement = document.createElement("div");
        // get year from the release date
        const year = new Date(book.released);
        bookElement.classList.add("text-center", "book"); // already inherited from the parent but just to satisfy the requirements
        bookElement.innerHTML = `
          <h2>${book.name}</h2>
          <p>Author: ${book.authors}</p>
          <p>Publication Year: ${year.getUTCFullYear()}</p>
          <p>Number of Pages: ${book.numberOfPages}</p>
        `;
        app.appendChild(bookElement);
      });
    });
};

fetchData(url);
