const navButtons = document.querySelectorAll(".btn");

navButtons.forEach(button => {
  const category = button.value;
  button.addEventListener("click", () => filterBooksByCategory(category));
});

function filterBooksByCategory(category) {
  sectionTotalPriceAllAvailableBooks.innerHTML = "";

  let filteredBooks = booksWithDiscount.filter(book => book.categoria === category);
  
  showBooks(filteredBooks);

  if (category == "availables") {
    sortByAvaiability();
  } else if(category == "by-price") {
    sortBooksByPrice()
  }
}