// chiedo una parola da inserire
const userWord = prompt("scrivi una parola");

// array della parola
const arrWord = [];

// creo un ciclo che vada a indentificere le lettere della parola
for (i = 0; i < userWord.length; i++) {
  const letters = userWord[i];

  arrWord.push(letters);
}

// array parola inserita reverse
const reverseWord = arrWord.reverse();

for (i = 0; i < reverseWord.length; i++) {
  const lettersReverse = reverseWord[i];
  console.log(lettersReverse);

  if (lettersReverse == userWord[i]) {
    console.log("la parola è palindroma");
  } else {
    console.log("la parola non è polindroma");
  }
}
