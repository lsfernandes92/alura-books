const apiEndpoint = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

let books = [];
let booksWithDiscount = [];

getBooks();

async function getBooks() {
  const request = await fetch(apiEndpoint);
  books = await request.json();

  booksWithDiscount = applyDiscount(books);
  
  showBooks(booksWithDiscount);
}