// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const numToPush = 5;
const randomNumbers = [];

let seconds = 30;

const cpuNum = document.getElementById('cpuNum');
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
     cpuNum.innerHTML = '';
     //count down finito
     timer.innerHTML = `Count Down finito`;
     
  }
}, 1000);


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
     
     cpuNum.innerHTML += `<h2>${number}</h2>`;
  });
}


