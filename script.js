// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const numToPush = 5;
const randomNumbers = [];

const cpuNum = document.getElementById('cpuNum');

pushNumbers();
console.log(randomNumbers);





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



