// Tableau des champions

const challengersList = [
  {
    name: "Jhin",
    src: "/img/champion/Jhin.png",
  },
  {
    name: "Kaisa",
    src: "/img/champion/Kaisa.png",
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
// perso1

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

// perso2

// Vise le bouton où faire ton clic
const btnPersos = document.getElementById("btn_perso1");

// Évènement au click sur  bouton perso
btnPersos.addEventListener("click", function () {
  // Prend un élément random du tableau
  const randomID =
    challengersList[Math.floor(Math.random() * challengersList.length)];

  // Ajoute un nom de champion
  const nom = document.querySelector(".Nom1");
  nom.innerHTML = randomID.name;

  // Ajoute son image
  const imgPersos = document.querySelector(".Img-perso1");
  imgPersos.innerHTML = "";
  const createImgs = document.createElement("img");
  createImgs.innerHTML = "";
  createImgs.classList.add("imgChampion");
  createImgs.alt = "img";
  createImgs.src = randomID.src;
  imgPersos.appendChild(createImgs);
});

// Vise le bouton où faire ton clic
const btnItems = document.getElementById("btn_items1");

// Évènement au click sur  bouton items
btnItems.addEventListener("click", function () {
  // Prend un élèment random du tableau

  // Ajoute un item dans sa div
  const imgItems = document.querySelector(".petit-iteme1");
  imgItems.innerHTML = "";
  // createImg.innerHTML = "";
  // boucle for
  for (let i = 0; i < 5; i++) {
    var randomID = itemsList[Math.floor(Math.random() * itemsList.length)];
    var createImg = document.createElement("img");
    createImg.classList.add("imgItem");
    createImg.alt = "img";
    createImg.src = randomID.src;
    imgItems.appendChild(createImg);
  }
  // boucle for fin
});

// COMBAT

// const btnCombat = document
//   .getElementById("btn_combat")
//   .addEventListener("click", combat);

// let perso1 = ["Jhin", 250, 27, 22, 32, 0];

// let perso2 = ["Kaisa", 240, 40, 22, 10, 0];

// let perso3 = ["Lux", 300, 25, 15, 10, 0];

// let perso4 = ["Sion", 200, 50, 34, 14, 0];

// let perso5 = ["Urgot", 250, 45, 20, 15, 0];

// let perso6 = ["Vex", 300, 30, 20, 15, 0];

// function combat() {
//   let viep1 = perso1[1];
//   let viep2 = perso2[1];
//   let viep3 = perso3[1];
//   let viep4 = perso4[1];
//   let viep5 = perso5[1];
//   let viep6 = perso6[1];
//   let victoire = 0;

//   while (victoire == 0) {
//     if (viep2 <= 0 && viep3 <= 0 && viep4 <= 0 && viep5 <= 0 && viep6 <= 0) {
//       console.log(perso1[0], "win");
//       victoire = 1;
//     // } else if (
//     //   viep1 <= 0 &&
//     //   viep3 <= 0 &&
//     //   viep4 <= 0 &&
//     //   viep5 <= 0 &&
//     //   viep6 <= 0
//     // ) {
//     //   console.log(perso2[0], "win");
//     //   victoire = 1;
//     // } else if (
//     //   viep1 <= 0 &&
//     //   viep2 <= 0 &&
//     //   viep4 <= 0 &&
//     //   viep5 <= 0 &&
//     //   viep6 <= 0
//     // ) {
//     //   console.log(perso3[0], "win");
//     //   victoire = 1;
//     // } else if (
//     //   viep1 <= 0 &&
//     //   viep2 <= 0 &&
//     //   viep3 <= 0 &&
//     //   viep5 <= 0 &&
//     //   viep6 <= 0
//     // ) {
//     //   console.log(perso4[0], "win");
//     //   victoire = 1;
//     // } else if (
//     //   viep1 <= 0 &&
//     //   viep2 <= 0 &&
//     //   viep3 <= 0 &&
//     //   viep4 <= 0 &&
//     //   viep6 <= 0
//     // ) {
//     //   console.log(perso5[0], "win");
//     //   victoire = 1;
//     // } else if (
//     //   viep1 <= 0 &&
//     //   viep2 <= 0 &&
//     //   viep3 <= 0 &&
//     //   viep4 <= 0 &&
//     //   viep5 <= 0
//     // ) {
//     //   console.log(perso6[0], "win");
//     //   victoire = 1;
//     // } else {
//     //   let aléatoire = Math.floor(Math.random() * 3);
//     //   viep1 =
//     //     viep1 -
//     //     (perso2[aléatoire + 2] +
//     //       perso3[aléatoire + 2] +
//     //       perso4[aléatoire + 2] +
//     //       perso5[aléatoire + 2] +
//     //       perso6[aléatoire + 2]);

//     //   viep2 =
//     //     viep2 -
//     //     (perso1[aléatoire + 2] +
//     //       perso3[aléatoire + 2] +
//     //       perso4[aléatoire + 2] +
//     //       perso5[aléatoire + 2] +
//     //       perso6[aléatoire + 2]);

//     //   viep3 =
//     //     viep3 -
//     //     (perso1[aléatoire + 2] +
//     //       perso2[aléatoire + 2] +
//     //       perso4[aléatoire + 2] +
//     //       perso5[aléatoire + 2] +
//     //       perso6[aléatoire + 2]);

//     //   viep4 =
//     //     viep4 -
//     //     (perso1[aléatoire + 2] +
//     //       perso2[aléatoire + 2] +
//     //       perso3[aléatoire + 2] +
//     //       perso5[aléatoire + 2] +
//     //       perso6[aléatoire + 2]);

//     //   viep5 =
//     //     viep5 -
//     //     (perso1[aléatoire + 2] +
//     //       perso2[aléatoire + 2] +
//     //       perso3[aléatoire + 2] +
//     //       perso4[aléatoire + 2] +
//     //       perso6[aléatoire + 2]);

//     //   viep6 =
//     //     viep6 -
//     //     (perso1[aléatoire + 2] +
//     //       perso2[aléatoire + 2] +
//     //       perso3[aléatoire + 2] +
//     //       perso5[aléatoire + 2] +
//     //       perso5[aléatoire + 2]);
//     // }
//   }
// }
