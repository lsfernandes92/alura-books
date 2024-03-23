const apiEndpoint = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

let books = []

getBooks();

async function getBooks() {
  const request = await fetch(apiEndpoint);
  books = await request.json();

  const booksWithDiscount = applyDiscount(books);
  showBooks(booksWithDiscount);
}