let nav = document.getElementById("nav");

let btn = document.getElementById("btn");
btn.addEventListener("click", affichageNav);

let header = document.getElementById("header")

let links = document.querySelectorAll(".link");

let main = document.getElementById("anime")

links.forEach((link) => {
  console.log(link);
  link.addEventListener("click", affichageNav);
});

function affichageNav() {
  console.log("nav");

  if (nav.style.visibility == "hidden") {
    nav.style.visibility = "visible";
    nav.style.opacity = "1";
    nav.style.zIndex = "9998";
    nav.style.width = "15vw";
    header.style.width = "15vw";
    main.style.width = "90vw"
    main.style.marginLeft = "auto"

  } else {
    nav.style.visibility = "hidden";
    nav.style.opacity = "0";
    nav.style.zIndex = "-9998";
    main.style.width = "99vw"
  }
}

affichageNav();
