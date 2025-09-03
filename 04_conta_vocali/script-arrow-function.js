/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno 

const word = 'javascript';
//scrivo array contenenti vocali
const vowelsArray = ["a", "e", "i", "o", "u"];

//creo variabile di stato da utilizzare per chiedere se la vocale è stata trovata
let isItaVowel = false;

// Dichiara la funzione qui.
const vowelsCheck = (nome) => {
    //creo variabile vuota in cui andranno le vocali
    let vowelsOnly = "";
    //creo un ciclo che parte da 0 e continua fin quando il contatore è minore della lunghezza del nome
    for(let i=0; i<nome.length; i++){
    /*verifico se nella variabile nome esistono le vocali presenti nel vowelsArray. Per verificare l'esistenza scrivo !==-1 poiché .indexOf da -1 per indicare l'assenza di un elemento 
    if(vowelsArray.indexOf(nome[i]) !==-1){
    //se le vocali sono presenti allora la variabile è vera
    isItaVowel=true;
    //aggiungo gli elementi (le vocali) nella la variabile vowelsOnly 
    vowelsOnly += nome[i];
    }
    }
    return vowelsOnly.length;
}

// Invoca la funzione qui e stampa il risultato in console
vowelsCheck(word);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log(vowelsCheck(word)); */
