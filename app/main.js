const apiEndpoint = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
const navButtons = document.querySelectorAll(".btn");

let books = []

getBooks();

async function getBooks() {
  const request = await fetch(apiEndpoint);
  books = await request.json();

  const booksWithDiscount = applyDiscount(books);
  showBooks(booksWithDiscount);
}

navButtons.forEach(button => {
  const category = button.value;
  button.addEventListener("click", () => filterBooksBy(category));
});

function filterBooksBy(category) {
  let filteredBooks = books.filter(book => book.categoria === category);
  showBooks(filteredBooks);
}