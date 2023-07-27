// chiedo le informazioni all'utente
const evenOrOdd = prompt("pari o dispari?");
const userNumber = parseInt(prompt("scrivi un numero da 1 a 5"));

// stabilisco cos'è pari e cosa è dispari
let even;

// se l'utente sceglie pari il computer prende dispari
if (evenOrOdd.length == 4) {
  even = true;
} else {
  even = false;
}
console.log(even);

// genero un numero random tra 1 e 5
function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

const computerNumber = getRandomNumber(1, 5);
console.log(computerNumber);
