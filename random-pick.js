// Tableau des champions

const challengersList = [
  {
    name: "Akali",
    src: "./img/champion/Akali.jpg",
  },
  {
    name: "Kaisa",
    src: "./img/champion/Kaisa.png",
  },
  {
    name: "Lux",
    src: "./img/champion/Lux.png",
  },
  {
    name: "Sion",
    src: "./img/champion/Sion.png",
  },
  {
    name: "Urgot",
    src: "./img/champion/Urgot.png",
  },
  {
    name: "Vex",
    src: "./img/champion/Vex.png",
  },
];

// Tableau des items

const itemsList = [
  {
    src: "./img/item/ange-gardien.png",
  },
  {
    src: "./img/item/appoche-hiver.png",
  },
  {
    src: "./img/item/arc.png",
  },
  {
    src: "./img/item/armure.png",
  },
  {
    src: "./img/item/bt.png",
  },
  {
    src: "./img/item/ceinture.png",
  },
  {
    src: "./img/item/fleet.png",
  },
  {
    src: "./img/item/gant.png",
  },
  {
    src: "./img/item/litro.png",
  },
  {
    src: "./img/item/pisto.png",
  },
  {
    src: "./img/item/randuin.png",
  },
  {
    src: "./img/item/rappel-mortel.png",
  },
];

// Vise le bouton où faire ton clic
const btnPerso = document.getElementById("btn_perso");

// Évènement au click sur tel bouton
btnPerso.addEventListener("click", function () {
  // Prend un élément random du tableau
  const randomID =
    challengersList[Math.floor(Math.random() * challengersList.length)];

  // Ajoute un nom de champion
  const nom = document.querySelector(".Nom");
  nom.innerHTML = randomID.name;

  // Ajoute son image
  const imgPerso = document.querySelector(".Img-perso");
  const createImg = document.createElement("img");
  createImg.classList.add("imgChampion");
  createImg.alt = "img";
  createImg.src = randomID.src;
  imgPerso.appendChild(createImg);
});

// Vise le bouton où faire ton clic
const btnItem = document.getElementById("btn_items");

// Évènement au click sur tel bouton
btnItem.addEventListener("click", function () {
  // Prend un élèment random du tableau
  const randomID = itemsList[Math.floor(Math.random() * itemsList.length)];

  // Ajoute un item dans sa div
  const imgItem = document.querySelector(".petit-iteme");
  const createImg = document.createElement("img");
  createImg.classList.add("imgItem");
  createImg.alt = "img";
  createImg.src = randomID.src;
  imgItem.appendChild(createImg);
});
