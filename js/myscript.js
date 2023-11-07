"use strict"

const pricePerKm = 0.21;
const discount18 = 20;
const discount18Name = "Agevolato";
const discount65 = 40;
const discount65Name = "Super Risparmio";
const userKm = document.getElementById("km-distance");
const userAge = document.getElementById("user-age");
const userFirstName = document.getElementById("user-first-name");
const userLastName = document.getElementById("user-last-name");
const elementTicket = document.getElementById("ticket-template");
const elementPassengerNameField = document.getElementById("passenger-name-field");
const elementDiscountField = document.getElementById("discount-field");
const elementCabField = document.getElementById("cab-field");
const elementCpCodeField = document.getElementById("cp-code-field");
const generateButton = document.getElementById("generate-button");
const resetButton = document.getElementById("reset-button");
const elementTicketPrice = document.getElementById("ticket-price-field");
const teacherBanner = document.getElementById("teacher-banner")
let ticketPrice = 0;


generateButton.addEventListener("click",
    function () {
        if (userKm.value > 0) {
            elementTicket.classList.add("d-block");
            elementTicket.classList.remove("d-none");
            ticketPrice = Number(userKm.value) * pricePerKm;
            if (userAge.value === "1") {
                ticketPrice = ticketPrice - (ticketPrice * discount18 / 100);
                elementDiscountField.innerHTML = discount18Name;
            } else if (userAge.value === "3") {
                ticketPrice = ticketPrice - (ticketPrice * discount65 / 100);
                elementDiscountField.innerHTML = discount65Name;
            } else {
                ticketPrice = ticketPrice;
                elementDiscountField.innerHTML = "Regular";
            }

            elementPassengerNameField.innerHTML = userFirstName.value + " " + userLastName.value;
            elementCabField.innerHTML = Math.floor(Math.random() * 20);
            elementCpCodeField.innerHTML = Math.floor(Math.random() * 10000);
            elementTicketPrice.innerHTML = ticketPrice.toFixed(2);
            teacherBanner.classList.add("d-none");
            teacherBanner.classList.remove("d-flex");
        } else {
            teacherBanner.classList.add("d-flex");
            teacherBanner.classList.remove("d-none");

        }

    });

resetButton.addEventListener("click",
    function () {
        elementTicket.classList.add("d-none");
        elementTicket.classList.remove("d-block");
    });






