
const prezzoAlKm = 0.21;
const kmDaPercorrere = prompt ('Quanti Kilometri percorrerai?');
const etaPasseggero = prompt ('Quanti anni hai?');
let scontoApplicabile;
let prezzoTotaleViaggio;
let richiestaABuonFine;

if(kmDaPercorrere < 0 || etaPasseggero < 0  || isNaN(kmDaPercorrere) || isNaN(etaPasseggero)){
    alert('Devi inserire un numero positivo');
    richiestaABuonFine = false;
}


if (etaPasseggero < 18 ) {
  scontoApplicabile = 0.2;
} else if (etaPasseggero > 65) {
  scontoApplicabile = 0.4;
} else {
  scontoApplicabile = 0;
}

let sconto = scontoApplicabile*100;

prezzoTotaleViaggio = (prezzoAlKm * kmDaPercorrere * (1 - scontoApplicabile)).toFixed(2);



document.getElementById('viaggio').innerHTML = "Gentile Cliente, <br> Grazie per averci scelto. <br><br> Il riepilogo del Suo viaggio: <br>Km da percorrere: " + kmDaPercorrere + '<br>Età passeggero: ' + etaPasseggero + "<br>Prezzo per Km: " + prezzoAlKm + '<br> Sconto applicabile: ' + sconto+"%<br><br>Totale prezzo del biglietto: €" + prezzoTotaleViaggio