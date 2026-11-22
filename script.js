document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  const actions = document.querySelector(".header-actions");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("nav-open");
      actions.classList.toggle("nav-open");
      toggle.classList.toggle("open", isOpen);
    });
  }
});
