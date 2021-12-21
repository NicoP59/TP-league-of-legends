let nav = document.getElementById("nav");

let btn = document.getElementById("btn");
btn.addEventListener("click", function (){


  if(window.innerWidth < 801){

    affichageNavres()


  }else{

    affichageNav()

  }

} );

let header = document.getElementById("header")

let links = document.querySelectorAll(".link");

let main = document.getElementById("anime")

links.forEach((link) => {
  console.log(link);
  link.addEventListener("click", affichageNavres, affichageNav );
  
  
});

function affichageNav() {
  console.log("nav");

  if (nav.style.visibility == "hidden") {
    nav.style.visibility = "visible";
    nav.style.opacity = "1";
    nav.style.zIndex = "9998";
    nav.style.width = "15vw";
    // header.style.width = "15vw";
    main.style.width = "90vw"
    main.style.width = "85vw"
    main.style.marginLeft = "auto"


  }else {
    nav.style.visibility = "hidden";
    nav.style.opacity = "0";
    nav.style.zIndex = "-9998";
    main.style.width = "99vw"
  }
}
function affichageNavres(){
  if ( nav.style.visibility == "hidden") {
    nav.style.visibility = "visible";
    nav.style.opacity = "1";
    nav.style.zIndex = "9998";
    nav.style.width = "100%";
    main.style.width = "85vw"
    main.style.marginLeft = "auto"


  }else {
    nav.style.visibility = "hidden";
    nav.style.opacity = "0";
    nav.style.zIndex = "-9998";
    main.style.width = "99vw"
  }
}


affichageNavres();

