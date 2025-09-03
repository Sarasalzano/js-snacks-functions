/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera 

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
//dichiaro array vuoto di nomi che iniziano per a
const namesStartingWithA = [];
//dichiaro variabile che rappresenta la lettera a
let letterA = "a"


// Dichiara la funzione qui.
const selectLetter = (array1, array2) => {
    //creo un ciclo che parte da 0 e cicla fin quando il contatore è minore della lunghezza dell'array
    for(let i=0; i<array1.length; i++){
        //se la variabile letterA corrisponde al primo carattere dell'elemento dell'array, allora aggiungo gli elementi dell'array1 alla fine dell'array2 
        if(letterA.toLowerCase() === array1[i][0].toLowerCase()){
        array2.push(array1[i]);
        }
    }
    return array2;
}

// Invoca la funzione qui e stampa il risultato in console
selectLetter(names, namesStartingWithA);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log(selectLetter(names, namesStartingWithA));*/