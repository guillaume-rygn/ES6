const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


let arrayEntrepreneur = [];

  console.log("\n\nVoici l'array des prénoms et noms d'entrepreneurs :");
  entrepreneurs.forEach(person =>{
    arrayEntrepreneur.push(`${person.first} ${person.last}`)
  });

  console.log(arrayEntrepreneur);

/*---------------------------------*/

let arrayEntrepreneurAge = [];

  entrepreneurs.forEach(person =>{
    delete Object.assign(person, {age: person.year})['year'];
    person.age = 2022 - person.age;
    arrayEntrepreneurAge.push(person);

  });

  console.log(arrayEntrepreneurAge);

/*---------------------------------*/

arrayEntrepreneurAge.forEach(person =>{
  delete Object.assign(person, {firstName: person.first})['first'];
  delete Object.assign(person, {lastName: person.last})['last'];

});

console.log(arrayEntrepreneurAge);

/*---------------------------------*/

console.log("\n\nVoici la liste des entrepreneurs nés dans les années 70 :");

entrepreneurs.forEach(person =>{
  if (2022 - person.age >= 1970 && 2022 - person.age < 1980){
    console.log(`- ${person.firstName} ${person.lastName} né en ${2022 - person.age}`)
  };
});

const result = entrepreneurs.filter(person => 2022 - person.age >= 1970 && 2022 - person.age < 1980);
console.log(result);
