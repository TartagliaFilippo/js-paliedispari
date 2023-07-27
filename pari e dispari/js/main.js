// chiedo le informazioni all'utente
// const evenOrOdd = prompt("pari o dispari?");
// const userNumber = parseInt(prompt("scrivi un numero da 1 a 5"));

// genero un numero random tra 1 e 5
const min = 1;
const max = 5;

function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

const computerNumber = getRandomNumber(1, 5);
console.log(computerNumber);
