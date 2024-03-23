const navButtons = document.querySelectorAll(".btn");

navButtons.forEach(button => {
  const category = button.value;
  button.addEventListener("click", () => filterBooksByCategory(category));
});

function filterBooksByCategory(category) {
  let filteredBooks = books.filter(book => book.categoria === category);
  showBooks(filteredBooks);
}