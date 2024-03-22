const booksWrapper = document.querySelector("#livros");

async function getBooks() {
  const request = await fetch("https://guilhermeonrails.github.io/casadocodigo/livros.json");
  const books = await request.json();

  books.forEach(book => {
    booksWrapper.innerHTML += `
      <div class="livro">
        <img class="livro__imagens" src="${book.imagem}"
          alt="${book.alt}" />
        <h2 class="livro__titulo">
          ${book.titulo}
        </h2>
        <p class="livro__descricao">${book.autor}</p>
        <p class="livro__preco" id="preco">R$ ${toBrlCurrency(book.preco)}</p>
        <div class="tags">
          <span class="tag">${capitalize(book.categoria)}</span>
        </div>
      </div>
    `;
  });
}

getBooks();

function toBrlCurrency(price) {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"});
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}