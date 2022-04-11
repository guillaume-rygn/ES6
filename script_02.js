const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

/*---------------------------------*/

console.log("\n\nVoici la liste des livres :");

books.forEach(book =>{
  console.log(`- ${book.title}`);
});

let arrayBooks = [];
books.forEach(book =>{
  arrayBooks.push(book.title);
})

console.log(arrayBooks);

/*---------------------------------*/

const result = books.filter(book => book.rented == 0);

if (result.length == 0 ){
  console.log("\n\ntous les livres ont été emprunté au moins une fois");
} else{
  console.log("\n\ncertains livres n'ont jamais été emprunté");
}

/*---------------------------------*/

let i = 0;
  let title;

  books.forEach(book =>{
    if(book.rented > i){
      i = book.rented
      title = book.title
    };
  });

  console.log("\n\nLe livre le plus emprunté est " + title + " avec " + i + " emprunts");

/*---------------------------------*/

  let a = books[0].rented;
  let b = 0;
  let titlebook;

  books.forEach(book =>{
    b = book.rented;
    if(b < a){
      a = book.rented
      titlebook = book.title
    };
  });

  console.log("\n\nLe livre le moins emprunté est " + titlebook + " avec " + a + " emprunts");


  /*---------------------------------*/


  let removeBook = books.filter(function(book){ 
    return book.id !== 133712;
  });
  console.log("\n\nVoici l'array avec le livre avec l'ID 133712 supprimé :");
  console.log(removeBook);
