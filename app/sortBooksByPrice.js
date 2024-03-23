const btnSortByPrice = document.querySelector("#btnOrdenarPorPreco");

btnSortByPrice.addEventListener("click", sortBooksByPrice);

function sortBooksByPrice() {
  const booksSorted = booksWithDiscount.sort((a, b) => a.discountedPrice - b.discountedPrice);
  showBooks(booksSorted);
}