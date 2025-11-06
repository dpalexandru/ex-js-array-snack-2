const books = [
  {
    title: "React Billionaire",
    pages: 250,
    author: {
      name: 'Alice',
      age: 35
    },
    available: false,
    price: '101€',
    tags: ['advanced', 'js', 'react', 'senior']
  },
  {
    title: "Advanced JS",
    pages: 500,
    author: {
      name: 'Bob',
      age: 20
    },
    available: true,
    price: '25€',
    tags: ['advanced', 'js', 'mid-senior']
  },
  {
    title: "CSS Secrets",
    pages: 320,
    author: {
      name: 'Alice',
      age: 17
    },
    available: true,
    price: '8€',
    tags: ['html', 'css', 'junior']
  },
  {
    title: "HTML Mastery",
    pages: 200,
    author: {
      name: 'Charlie',
      age: 50
    },
    available: false,
    price: '48€',
    tags: ['html', 'advanced', 'junior', 'mid-senior']
  },
];


// S N A C K    1
// Crea un array (longBooks) con i libri che hanno più di 300 pagine;

const longBooks = books.filter((l) => l.pages > 300)
console.log(longBooks)

//Creare un array(longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
const longBooksTitles = longBooks.map(l => l.title)
console.log(longBooksTitles)

//Stampa in console ogni titolo nella console.

books.forEach(l => {
  console.log(l.title)
});


// S N A C K    2
//Creare un array (availableBooks) che contiene tutti i libri disponibili.
const availableBooks = books.filter(l => l.available === true);
console.log(availableBooks)

// Crea un array (discountedBooks) con gli availableBooks, 
// ciascuno con il prezzo scontato del 20% 
// (mantieni lo stesso formato e arrotonda al centesimo)

const discountedBooks = availableBooks.map((l) => {
  const prezzo = parseFloat(l.price);
  const scontato = (prezzo * 0.8);
  const formattato = `${scontato}€`;
  return {
    ...l,
    price: formattato
  }
})
console.log(discountedBooks)

// Salva in una variabile (fullPricedBook) il primo elemento di 
// discountedBooks che ha un prezzo intero (senza centesimi).

const fullPricedBook = discountedBooks.find((l) => {
  const prezzo = parseFloat(l.price);
  return prezzo % 1 === 0;
});
console.log(" Primo senza decimali in discountedBooks");
console.log(fullPricedBook);