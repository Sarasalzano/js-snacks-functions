/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';
const greeting = "Ciao";
let userGreeting; 

// Dichiara la funzione qui.
function greetingSentence(saluto, nome) {
    userGreeting = saluto + nome;
    return userGreeting;
}

// Invoca la funzione qui e stampa il risultato in console
greetingSentence(greeting, userName);


//Risultato atteso se si passa 'Mario': // ciao Mario
console.log(greetingSentence(greeting, userName));