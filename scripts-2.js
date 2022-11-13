const cajitasModal = document.querySelectorAll(".lbl-modal");
const titleModal = document.querySelector(".titulo-cambiante");
cajitasModal.forEach((cajita) => {
  cajita.addEventListener("mouseenter", function () {
    titleModal.innerHTML = cajita.dataset.title;
    titleModal.classList.add("visible");
  });
  cajita.addEventListener("mouseleave", function () {
    titleModal.classList.remove("visible");
  });
});

const coso = document.querySelector(".coso");
cajitasModal.forEach((cuadrados) => {
  coso.addEventListener("mouseenter", function () {
    cuadrados.classList.add("blur");
  });
  coso.addEventListener("mouseleave", function () {
    cuadrados.classList.remove("blur");
  });
});

var r = document.querySelector(":root");
var numero = 1000;
var hex = 0;

window.onscroll = function () {
  numero = numero + 1;
  hex = numero.toString(16);
  r.style.setProperty("--sombra", "#" + hex);
};
