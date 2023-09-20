// JavaScript Document
console.log("hi");

var deZoekButton = document.querySelector("main button:first-of-type");

deZoekButton.onclick = veranderDeButton;

/* stap 3 */
/* maak de functie veranderMezelf aan */
function veranderDeButton() {
/* voeg in de functie de class anders toe aan deDerdeP */
 deZoekButton.classList.add("anders");
}