/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const vowelsArray = ["a", "e", "i", "o", "u"];
let isItaVowel = false;

// Dichiara la funzione qui.
function vowelsCheck(nome) {
    let vowelsOnly = "";
    for(let i=0; i<nome.length; i++){
    if(vowelsArray.indexOf(nome[i]) !==-1){
    isItaVowel=true;
    vowelsOnly += nome[i];
    }
    }
    return vowelsOnly.length;
}

// Invoca la funzione qui e stampa il risultato in console
vowelsCheck(word);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log(vowelsCheck(word));
