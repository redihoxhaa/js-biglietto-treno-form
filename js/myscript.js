const pricePerKm = 0.21;
const discount18 = 20;
const discount65 = 40;
let userKm = document.getElementById("km-distance");
let userAge = document.getElementById("user-age");
const generateButton = document.getElementById("generate-button");
let ticketPrice = 0;

generateButton.addEventListener("click",
    function () {
        console.log("I km sono", Number(userKm.value));
        console.log("L'età è", Number(userAge.value));
        console.log("Il prezzo per km è", pricePerKm);
        ticketPrice = Number(userKm.value) * pricePerKm;
        if (Number(userAge.value) < 18) {
            ticketPrice = ticketPrice - (ticketPrice * discount18 / 100);
        } else if (Number(userAge.value) >= 65) {
            ticketPrice = ticketPrice - (ticketPrice * discount65 / 100);
        }

        console.log("Il prezzo del tuo biglietto è: ", Number(ticketPrice.toFixed(2)));
    });