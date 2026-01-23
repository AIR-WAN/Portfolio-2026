// Sélection de l'élément carte principal (conteneur cliquable)
const card = document.querySelector(".card");

// Sélection de l'élément interne qui va effectuer la rotation 3D
const cardInner = document.querySelector(".card-inner");

// Variable booléenne pour suivre l'état de la carte (retournée ou non)
let isFlipped = false;

// Variable pour suivre si la souris est sur la carte
let isHovered = false;

// Variable pour l'animation de rotation continue
let rotationAngle = 0;
let animationId;

// Fonction pour faire tourner la carte en continu
function rotateCard() {
  if (!isHovered) {
    rotationAngle += 0.5; // Vitesse de rotation (ajustable)
    cardInner.style.transform = `rotateY(${rotationAngle}deg)`;
    animationId = requestAnimationFrame(rotateCard);
  }
}

// Démarre l'animation au chargement de la page
rotateCard();

// Gestion du survol - arrête la rotation et affiche la face avant
card.addEventListener("mouseenter", () => {
  isHovered = true;
  cancelAnimationFrame(animationId);
  cardInner.style.transform = "rotateY(0deg)";
  rotationAngle = 0;
  isFlipped = false; // Remet l'état à "non retournée"
});

// Quand la souris quitte la carte, relance la rotation continue
card.addEventListener("mouseleave", () => {
  isHovered = false;
  rotateCard();
});

// Gestion du clic - retourne la carte
card.addEventListener("click", () => {
  isFlipped = !isFlipped;
  
  cancelAnimationFrame(animationId);
  
  if (isFlipped) {
    // Retourne la carte
    cardInner.style.transform = "rotateY(-180deg)";
  } else {
    // Remet la carte à l'endroit
    cardInner.style.transform = "rotateY(0deg)";
    rotationAngle = 0;
  }
});