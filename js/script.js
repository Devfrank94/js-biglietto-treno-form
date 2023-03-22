//Dichiaro le variabili e creo funzione direttamente nel button generate
const priceKm = 0.21;

let btnGenerate = document.getElementById("generate");
btnGenerate.addEventListener("click", function () {
    let passengerName = document.getElementById("name").value;

    let km = document.getElementById("km").value;

    let age = document.getElementById("age").value;

    let ticketPrice = Math.floor(km * priceKm);
    let discount;
    let discountType;

     // Calcolo sconto e costo per età

    if (age == "minorenne") {
      discount = ticketPrice * 0.2; 
      discountType = "Sconto Minorenne";
    } else if (age =="over65") {
      discount = ticketPrice * 0.4;
      discountType = "Sconto Silver";
    } else {
      discount = 0;
      discountType = "Biglietto standard";
    }

    // Calcolo prezzo finale
    let finalPrice = ticketPrice - discount;

    // Creazione dati biglietto in pagina
    document.getElementById("nome-passegero").innerHTML = passengerName;
    document.getElementById("offerta").innerHTML = discountType;
    document.getElementById("costo-biglietto").innerHTML = finalPrice.toFixed(2) + "€";
    
    // Genera numero carrozza casuale
    let wagonNumber = Math.floor(Math.random() * 9) + 1;
    document.getElementById("carrozza").innerHTML = wagonNumber;

    // Genera cp-code
    let cpCode = Math.floor(Math.random() * 10000) + 90000;
    document.getElementById("codice-cp").innerHTML = cpCode;
    
    // Mostra ticket
    document.getElementById("biglietto").className = "bottom-container show";

  }
);

// Evento al click del pulsante Annulla

let btnCanc = document.getElementById("cancel");
btnCanc.addEventListener("click",
  function () {
      // Cancella parametri ticket
      document.getElementById("name").value = "";
      document.getElementById("km").value = "";
      document.getElementById("age").value = "seleziona";
      
      // Cancella sezione ticket
      document.getElementById("biglietto").className = "bottom-container hidden";
  }
);