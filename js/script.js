
const prezzoAlKm = 0.21;
const kmDaPercorrere = prompt ('Quanti Kilometri percorrerai?');
const etaPasseggero = prompt ('Quanti anni hai?');
let scontoApplicabile;

let prezzoTotaleViaggio;


if (etaPasseggero < 18 ) {
  scontoApplicabile = 0.2;
} else if (etaPasseggero > 65) {
  scontoApplicabile = 0.4;
} else {
  scontoApplicabile = 0;
}

let sconto = scontoApplicabile*100;

prezzoTotaleViaggio = (prezzoAlKm * kmDaPercorrere * (1 - scontoApplicabile)).toFixed(2);


console.log(etaPasseggero)
console.log(prezzoTotaleViaggio)
console.log(kmDaPercorrere)

document.getElementById('viaggio').innerHTML = "Gentile Cliente, <br> Grazie per averci scelto. <br><br> Il riepilogo del Suo viaggio: <br>Km da percorrere: " + kmDaPercorrere + '<br>Età passeggero: ' + etaPasseggero + "<br>Prezzo per Km: " + prezzoAlKm + '<br> Sconto applicabile: ' + sconto+"%<br><br>Totale prezzo del biglietto: €" + prezzoTotaleViaggio