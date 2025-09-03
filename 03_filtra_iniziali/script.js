/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const namesStartingWithA = [];
let letterA = "a"


// Dichiara la funzione qui.

function selectLetter(array1, array2) {
    for(let i=0; i<array1.length; i++){
        if(letterA.toLowerCase() === array1[i][0].toLowerCase()){
        array2.push(array1[i]);
        }
    }
    return array2;
}

// Invoca la funzione qui e stampa il risultato in console
selectLetter(names, namesStartingWithA);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log(selectLetter(names, namesStartingWithA));