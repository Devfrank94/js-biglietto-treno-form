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


  }
)