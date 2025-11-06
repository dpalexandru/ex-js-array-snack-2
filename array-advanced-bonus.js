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
