// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const numToPush = 5;
const randomNumbers = [];

let seconds = 30;
let strikes = 0;

const numbers = document.getElementById('numbers');
const timer = document.getElementById('countDown');

pushNumbers();
console.log(randomNumbers);

printNum();


const countDown = setInterval(() => {
  seconds--;
  timer.innerHTML = `Count Down: ${seconds}`;
  console.log(seconds);
  
  if (seconds === 0) {

     //stoppo il count down
     clearInterval(countDown);
     //azzero il display
     numbers.innerHTML = '';
     //count down finito
     timer.innerHTML = `Count Down finito`;

     userNum();
     printResult();
  }
}, 1000);

function userNum(){
  for (let i = 0; i < numToPush; i++) {
    let number;

    do {
       number = parseInt(prompt('Inserisci un numero da 1 a 100'));
       if (number < 1 || number > 100 || number === NaN) {
          alert('Attenzione!!Inserisci un numero corretto!')
       }
    } while (number < 1 || number > 100);
    
    console.log('hai scelto', number);
    rightNum(number);
 }
}

function rightNum(n) {
   
  if (randomNumbers.includes(n)) {
     strikes++;
  }
}

function printResult() {
  if (!strikes) {

     numbers.innerHTML = `
        <h1>Non hai ricordato nessun numero</h1>
     `;
  } else if (strikes === randomNumbers.length) {
     
     numbers.innerHTML = `
        <h1>Hai ricordato tutti e ${strikes} i numeri. Congratulazioni!</h1>
     `;
  } else {

     numbers.innerHTML = `
        <h1>Hai ricordato ${strikes} numeri</h1>
     `;
  }
}

function pushNumbers() {
      
   while (randomNumbers.length < numToPush) {
      
      const number = getRandomNumber(1, 100);

      if (!randomNumbers.includes(number)) {
         randomNumbers.push(number);
      }
   }
}


function getRandomNumber(min, max) {
   
   return Math.floor(Math.random() * (max - min + 1) + min);
}

function printNum() {

  randomNumbers.forEach(number => {
     
     numbers.innerHTML += `<h2>${number}</h2>`;
  });
}


