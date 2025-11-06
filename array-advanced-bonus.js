//Usando la l'API http://localhost:3333/books/{id} usa la combinazione
//  di .map() e Promise.all(), per creare una funzione (getBooks) 
// che a partire da un array di id (ids), ritorna una promise che 
// risolve un array di libri (books).
//Testala con l’array [2, 13, 7, 21, 19] .

const ids = [2, 13, 7, 21, 19];

async function getBooks(ids) {
  const promises = ids.map((id) =>
    fetch(`http://localhost:3333/books/${id}`)
      .then((res) => res.json())
  );
  // promise all 
  const books = await Promise.all(promises);

  return books;
}

//chiamo la funzione 
getBooks(ids)
  .then((books) => {
    console.log("Libri ottenuti:", books);
  })
  .catch((error) => {
    console.error("Errore:", error.message);
  });

// S N A C K    7
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

// Snack 7 (Bonus) - Analizza i tag
// Usa reduce per creare un oggetto (tagCounts)
//  che conta quante volte ogni tag viene 
// usato tra i libri.

const tagCounts = books.reduce((acc, b) => {
  b.tags.forEach(tag => {
    if (acc[tag]) {
      acc[tag] = acc[tag] + 1;
    } else {
      acc[tag] = 1;
    }
  });
  return acc;
}, {});

console.log(tagCounts)


//Snack 6 (Bonus) - Ordina i libri
//Crea una variabile booleana (areThereAvailableBooks) 
// per verificare se c’è almeno un libro disponibile.

const areThereAvailableBooks = books.some(l => l.available === true)
console.log("libri avviabili:" + areThereAvailableBooks)

//Crea un array (booksByPrice) con gli elementi di books
//  ordinati in base al prezzo (crescente).

const booksSortedByPrice = books.sort((a, b) => {
  const prezzoA = parseFloat(a.price);
  const prezzoB = parseFloat(b.price);
  return prezzoA - prezzoB;
});

console.log(booksSortedByPrice);


//Ordina l’array booksByPricein base alla disponibilità 
// (prima quelli disponibili), senza creare un nuovo array.

books.sort((a, b) => {
  // true viene trattato come 1, false come 0
  // quindi invertiamo il segno per mettere prima i true
  return (b.available === true) - (a.available === true);
});

console.log(books);


