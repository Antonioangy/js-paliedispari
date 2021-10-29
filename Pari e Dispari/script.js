// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri

let numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'));

let numeroPc = numeroCasuale()

function numeroCasuale() {
    numero = Math.round(Math.random() * 5);
    return numero
}
somma = numeroUtente + numeroPc;
let risultato = pari(somma);
if (risultato === true) {
    console.log('somma è pari');
} else {
    console.log('somma è dispari');
}
/*
pari(1);
pari(3);
pari(15);
*/


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function pari(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
// Dichiariamo chi ha vinto.