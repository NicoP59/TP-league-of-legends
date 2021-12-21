const message = "Merci pour votre commentaire.";

document
  .getElementById("contact_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
