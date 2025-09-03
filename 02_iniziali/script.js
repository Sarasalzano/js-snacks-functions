/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const firstLetterArray = [];


// Dichiara la funzione qui.
function whatIsTheFirstLetter(array1, array2) {
    for(let i=0; i<array1.length; i++) {
        let firstLetter = array1[i][0];
        firstLetterArray.push(firstLetter);
    }
    return firstLetterArray
}


// Invoca la funzione qui e stampa il risultato in console
whatIsTheFirstLetter(names, firstLetterArray);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log(whatIsTheFirstLetter(names, firstLetterArray));