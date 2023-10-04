console.log("hi");

// Hamburgermenu var aanmaken
var hamburgerMenu = document.querySelector("header nav:first-of-type button");
var navigatie = document.querySelector("header nav ul:first-of-type");
var menuIcon = document.querySelector("header nav:first-of-type img");

// Var Starbuckslogo
var starbucksLogo = document.querySelector("header > img");
// Variabele voor de hele header
var header = document.querySelector("header");

// Hamburgermenu uitklappen
hamburgerMenu.onclick = function () {
  navigatie.classList.toggle("hamburgermenuopen");

  // Hamburger symbool veranderen naar kruis symbool
  if (navigatie.classList.contains("hamburgermenuopen")) {
    menuIcon.src = "images/cross.png";
  } else {
    menuIcon.src = "images/hamburgermenu.svg";
  }
};

// console log
console.log("pressed");



// Starbuckslogo confetti
if (starbucksLogo) {
  // Als het element is gevonden (niet null), voer dan deze code uit
  starbucksLogo.addEventListener("click", function () {
    // Controleer of het "confetti" effect al is toegepast op de header
    if (header.classList.contains("confetti")) {
      // Verwijder "confetti" klasse van de header als het al is toegepast
      console.log("Confetti uitzetten");
      header.classList.remove("confetti");
    } else {
      // Voeg "confetti" klasse toe aan de header als het nog niet is toegepast
      console.log("Confetti aanzetten");
      header.classList.add("confetti");
    }

    // Controleer ook of het "confetti" effect is toegepast op het logo zelf
    if (starbucksLogo.classList.contains("confetti")) {
      // Verwijder "confetti" klasse van het logo als het al is toegepast
      starbucksLogo.classList.remove("confetti");
    }
  });
} else {
  // Als het element niet is gevonden (null), voer dan deze code uit
  console.log("Kon het Starbucks logo niet vinden.");
}




