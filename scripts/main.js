document.addEventListener("DOMContentLoaded", () => {
  const hamburguerButton = document.querySelector(".hamburguer-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburguerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});
