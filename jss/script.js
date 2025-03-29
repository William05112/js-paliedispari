// //Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma (provate a implementare questa funzione con il ciclo for)

// secondo metodo


const parola = prompt("Inserisci una parola");

const parolaDivisa = parola.split("")
console.log(parolaDivisa);

// let parolaInversa = "";
// for (let i = parola.length - 1; i >= 0; i--) {
//     let una = parola[i];
//     parolaInversa += una;
//     //console.log(parolaInversa);
// }
// console.log(parolaInversa);




let parolaInversa = [];
for (let i = parolaDivisa.length - 1; i >= 0; i--) {
    let una = parolaDivisa[i];
    parolaInversa.push(una);
}
console.log(parolaInversa);
let parolaInversa1 = parolaInversa.join("");


if (parola === parolaInversa1) {
    console.log("La parola è palindroma");
} else {
    console.log(`La parola ${parola} non è palindroma`);
}


//primo metodo
// const parolaUtente = prompt("Inserisci una parola");
// const parolaInversa = parolaUtente.split("").reverse().join("");
// console.log(parolaUtente, parolaInversa);

// if (parolaUtente === parolaInversa) {
//     console.log("La parola è palindroma");
// }else {
//     console.log(`La parola ${parolaUtente} non è palindroma`);
// }

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 6.
// Generiamo un numero random (sempre da 1 a 6) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
// Domande da  farsi quando si crea una funzione:
// 1. Come dovrebbe chiamarsi?
// 2. Ho bisogno di parametri?
// 3. Devo restituire un valore?
// 4. Se sì, di che tipo?/*/


























