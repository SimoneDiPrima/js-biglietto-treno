/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in pagina forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

const userAge = prompt(`quanti anni ha il passeggero?` , 20);
console.log(userAge);

const Kilometers = prompt(`quanti kilometri dovra percorrere ha il passeggero?` ,15);
console.log(Kilometers);

let Result;

Result = parseInt(Kilometers * 0.21);
console.log(Result);

if(userAge < 18){
    Result = Result - ((Result / 100) * 20);
    console.log(Result);
}
else if(userAge > 65){
    Result = Result - ((Result / 100) * 40);
    console.log(Result);
}
else{
    console.log(Result);
}
