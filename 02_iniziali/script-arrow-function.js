/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
//dichiaro un array vuoto in cui inserirò le iniziali dei nomi
const firstLetterArray = [];


// Dichiara la funzione qui.
const whatIsTheFirstLetter = (array1, array2) => {
    //inizio il ciclo partendo da 0 e continuo a ciclare fin quando i è minore della lunghezza dell'array1 
    for(let i=0; i<array1.length; i++) {
        //dichiaro la variabile della prima lettera degli elementi dell'array1
        let firstLetter = array1[i][0];
        //aggiungo le prime lettere all' array2
        firstLetterArray.push(firstLetter);
    }
    return firstLetterArray
}

// Invoca la funzione qui e stampa il risultato in console
whatIsTheFirstLetter(names, firstLetterArray);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log(whatIsTheFirstLetter(names, firstLetterArray)); */