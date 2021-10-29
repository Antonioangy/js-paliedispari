// Chiedere all’utente di inserire una parola
const parolaUtente = prompt("inserisci una parola");

// Creare una funzione per capire se la parola inserita è palindroma.
// anna => a, n, n, a
/*
for (let i=0; i<parolaUtente.length; i++) { // da 0 a 3
    console.log(parolaUtente[i]);
}
*/
// da 3 a 0
let parolaInversa = "";
// es. marco => marco[0] = m
for(let i=parolaUtente.length-1; i>=0; i--) {
    parolaInversa = parolaInversa + parolaUtente[i];
}

if (parolaUtente == parolaInversa) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}
