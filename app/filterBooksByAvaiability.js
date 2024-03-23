const btnBooksAvailable = document.querySelector("#btnLivrosDisponiveis");

btnBooksAvailable.addEventListener("click", sortByAvaiability);

function sortByAvaiability() {
  const filteredBooks = booksWithDiscount.filter(book => book.quantidade > 0);
  showBooks(filteredBooks);
}