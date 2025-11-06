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

// S N A C K    3
// Creare un array (authors) che contiene gli autori dei libri.

const authors = books.map(l => l.author)
console.log(authors)

//Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.

const areAuthorsAdults = authors.every(l => l.age > 18)
console.log(`Gli autori sono tutti maggiorenni: ${areAuthorsAdults}`)

//Ordina l’array authors in base all’età, senza creare un nuovo array.
//(se areAuthorsAdult è true, ordina in ordine crescente, 
// altrimenti in ordine decrescente)

if (areAuthorsAdults === true) {
  authors.sort((a, b) => b.age - a.age)
} else {
  authors.sort((a, b) => a.age - b.age)
}

console.log(authors);


// S N A C K    4
//Creare un array (ages) che contiene le età degli autori dei libri.

const ages = authors.map(l => l.age)
console.log("età autori: ");
console.log(ages);

//Calcola la somma delle età (agesSum) usando reduce.
const agesSum = ages.reduce((acc, a) => acc + a, 0)
console.log("somma età")
console.log(agesSum)

//Stampa in console l’età media degli autori dei libri.

const media = agesSum / ages.length
console.log("media età")
console.log(media)

