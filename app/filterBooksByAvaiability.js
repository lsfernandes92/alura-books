const btnBooksAvailable = document.querySelector("#btnLivrosDisponiveis");
const sectionTotalPriceAllAvailableBooks = document.querySelector("#valor_total_livros_disponiveis");

btnBooksAvailable.addEventListener("click", sortByAvaiability);

function sortByAvaiability() {
  const filteredBooks = booksWithDiscount.filter(book => book.quantidade > 0);
  
  showBooks(filteredBooks);

  showTotalPriceAvailableBooks(filteredBooks);
}

function showTotalPriceAvailableBooks(books) {
  sectionTotalPriceAllAvailableBooks.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${sumBooksTotalPrice(books)}</span></p>
    </div>
  `
}

function sumBooksTotalPrice(books) {
  const total = books.reduce((accumulator, book) => accumulator + book.discountedPrice, 0);
  return total.toLocaleString("pt-BR", { style: "currency", currency: "BRL"});
}