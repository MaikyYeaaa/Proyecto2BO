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
