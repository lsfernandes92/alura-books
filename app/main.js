const apiEndpoint = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBooks();

async function getBooks() {
  const request = await fetch(apiEndpoint);
  const books = await request.json();

  const booksWithDiscount = applyDiscount(books);
  showBooks(booksWithDiscount);
}