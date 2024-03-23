const btnSortByPrice = document.querySelector("#btnOrdenarPorPreco");

btnSortByPrice.addEventListener("click", sortBooksByPrice);

function sortBooksByPrice() {
  const booksSorted = books.sort((a, b) => a.preco - b.preco);
  showBooks(booksSorted);
}