// chiedo le informazioni all'utente
const userEvenOrOdd = prompt("pari o dispari?");
console.log("l'utente ha scelto: " + userEvenOrOdd);
const userNumber = parseInt(prompt("scrivi un numero da 1 a 5"));
console.log("il numero dell'utente è: " + userNumber);

// variabile pari toggle
let even;

// variabile somma
let sum = 0;

// variabile del risultato finale
let evenOrOdd;

// costanti foglio index
// const userChoiceEl = document.getElementById("user-choice");
// const userNumberEl = document.getElementById("user-number");
// const computerNumberEl = document.getElementById("computer-number");
// const resultEl = document.getElementById("result");

// se l'utente sceglie pari il computer prende dispari
if (userEvenOrOdd.length == 4) {
  even = true;
} else {
  even = false;
}

// ! funzione numero random tra 1 e 5
function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

// uso la funzione per generare il numero del computer
const computerNumber = getRandomNumber(1, 5);
console.log("numero del computer è: " + computerNumber);

// sommo i numeri
sum = userNumber + computerNumber;
console.log("la somma dei numeri è: " + sum);

// stabilisco cos'è pari e cosa è dispari
const evenCheck = "pari";
const oddCheck = "dispari";

// stabilisco se la somma è pari o dispari
if (sum % 2 == 0) {
  evenOrOdd = evenCheck;
} else {
  evenOrOdd = oddCheck;
}
console.log("il risultato delle operazioni è: " + evenOrOdd);

// stampo i valori sul foglio per sistemare il caos in testa

// userEvenOrOdd.innerHTML = userChoiceEl;
// userNumber.innerHTML = userNumberEl;
// computerNumber.innerHTML = computerNumberEl;
// evenOrOdd.innerHTML = resultEl;
