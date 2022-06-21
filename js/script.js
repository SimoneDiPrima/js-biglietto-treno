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
 let Prezzo;

Prezzo = parseInt(Kilometers * 0.21);
console.log(Prezzo);
document.getElementById("finalprice").innerHTML= Prezzo.toFixed(2);
document.getElementById("finalprice").innerHTML = `<strong>il prezzo del biglietto senza nessun tipo di sconto( Tariffa Intera) è:${Prezzo.toFixed(2)}€</strong>`;
if(userAge < 18) {
   Prezzo = (Prezzo - ((Prezzo / 100) * 20));
  console.log(Prezzo);
  document.getElementById("finalprice").innerHTML = `<strong>il prezzo del biglietto con il 20% di sconto( tariffa universitari ) è:  ${Prezzo.toFixed(2)} € </strong>`;
 }
else if(userAge > 65){
    Prezzo = Prezzo - ((Prezzo / 100) * 40);
    console.log(Prezzo);
   document.getElementById("finalprice").innerHTML = `<strong>il prezzo del biglietto con il 40% di sconto ( Tariffa over65 ) è : ${Prezzo.toFixed(2)}€ </strong>`;
}

