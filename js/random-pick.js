// Tableau des champions

const challengersList = [
  {
    name: "Jhin",
    src: "/img/champion/Jhin.png",
  },
  {
    name: "Blitzcrank",
    src: "/img/champion/Blitzcrank.png",
  },
  {
    name: "Lux",
    src: "/img/champion/Lux.png",
  },
  {
    name: "Sion",
    src: "/img/champion/Sion.png",
  },
  {
    name: "Urgot",
    src: "/img/champion/Urgot.png",
  },
  {
    name: "Vex",
    src: "/img/champion/Vex.png",
  },
];

// Tableau des items

const itemsList = [
  {
    src: "/img/item/ange-gardien.png",
  },
  {
    src: "/img/item/appoche-hiver.png",
  },
  {
    src: "/img/item/arc.png",
  },
  {
    src: "/img/item/armure.png",
  },
  {
    src: "/img/item/bt.png",
  },
  {
    src: "/img/item/ceinture.png",
  },
  {
    src: "/img/item/fleet.png",
  },
  {
    src: "/img/item/gant.png",
  },
  {
    src: "/img/item/litro.png",
  },
  {
    src: "/img/item/pisto.png",
  },
  {
    src: "/img/item/randuin.png",
  },
  {
    src: "/img/item/cote-epineuse.png",
  },
];

// Vise le bouton où faire ton clic
const btnPerso = document.getElementById("btn_perso");

// Évènement au click sur  bouton perso
btnPerso.addEventListener("click", function () {
  // Prend un élément random du tableau
  const randomID =
    challengersList[Math.floor(Math.random() * challengersList.length)];

  // Ajoute un nom de champion
  const nom = document.querySelector(".Nom");
  nom.innerHTML = randomID.name;

  // Ajoute son image
  const imgPerso = document.querySelector(".Img-perso");
  imgPerso.innerHTML = "";
  const createImg = document.createElement("img");
  createImg.innerHTML = "";
  createImg.classList.add("imgChampion");
  createImg.alt = "img";
  createImg.src = randomID.src;
  imgPerso.appendChild(createImg);
});

// Vise le bouton où faire ton clic
const btnItem = document.getElementById("btn_items");

// Évènement au click sur  bouton items
btnItem.addEventListener("click", function () {
  // Prend un élèment random du tableau

  // Ajoute un item dans sa div
  const imgItem = document.querySelector(".petit-iteme");
  imgItem.innerHTML = "";
  // createImg.innerHTML = "";
  // boucle for
  for (let i = 0; i < 5; i++) {
    var randomID = itemsList[Math.floor(Math.random() * itemsList.length)];
    var createImg = document.createElement("img");
    createImg.classList.add("imgItem");
    createImg.alt = "img";
    createImg.src = randomID.src;
    imgItem.appendChild(createImg);
  }
  // boucle for fin
});
