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
