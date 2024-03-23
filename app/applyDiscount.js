function applyDiscount(books) {
  const discount = 0.3;

  return books.map(book => {
    bookPrice = book.preco;
    return {...book, discountedPrice: book.preco = bookPrice - (bookPrice * discount)}
  });
}