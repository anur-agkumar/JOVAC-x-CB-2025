// books list
const lib = [];
for (let i = 0; i < 20; i++) {
  lib.push({
    id: i + 1,
    name: `Book ${i + 1}`,
    writer: `Writer ${i + 1}`,
    price: Math.floor(Math.random() * 400) + 50,  // Price between 50 and 500
    avail: Math.random() > 0.3,                  // 70% chance it's available
    qty: Math.floor(Math.random() * 10) + 2      // 2 to 11 copies
  });
}

// Function  15% discount book price
function Disc(book) {
  return {
    ...book,
    discPrice: book.price * 0.85
  };
}

// Function check book available & > 3 copies
function Avail(book) {
  return book.avail && book.qty > 3;
}

// Function calculate total value
function sumVal(sum, book) {
  return sum + book.discPrice * book.qty;
}

// new data of library
function newLib(data) {
  const withDisc = data.map(Disc);
  const availBooks = withDisc.filter(Avail);
  const totalVal = availBooks.reduce(sumVal, 0);

  return {
    books: availBooks,
    totalVal: totalVal.toFixed(2)
  };
}

//  result
const res = newLib(lib);
console.log('Available Books:', res.books);
console.log('Total Library Value:', res.totalVal);