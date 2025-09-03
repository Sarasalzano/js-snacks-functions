/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const nameUser = 'Mario';
//dichiaro variabile che mostrerà il messaggio finale
let finalMessage;
//stabilisco la data e l'rario del giorno e stampo
const todayDate = new Date("September 3, 2025 16:55");
console.log(todayDate.getHours());

const messageByTime = (messaggio, nome) => {
     //se l'orario è fino alle 13, allora il messaggio finale sarà buongiorno + nome 
    if(todayDate.getHours() <= 13) {
        finalMessage = "Buongiorno" + " " + nome;
     //se invece l'orario è fino alle 17, allora il messaggio finale sarà buon pomeriggio + nome     
    } else if(todayDate.getHours() <=17) {
        finalMessage = "Buon pomeriggio"+ " " + nome;
         //se l'orario è più tardi delle 17, allora il messaggio finale sarà buonasera + nome 
    } else if(todayDate.getHours() > 17) {
       finalMessage = "Buonasera" + " " + nome;
}
return finalMessage;
}

// Invoca la funzione qui e stampa il risultato in console
messageByTime(finalMessage, nameUser);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
console.log(messageByTime(finalMessage, nameUser)); 