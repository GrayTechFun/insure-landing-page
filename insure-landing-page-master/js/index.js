const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const c = document.querySelector(".close");

menu.addEventListener("click", () => {
  menu.classList.add("closed");
  nav.classList.toggle("open");
  c.classList.add("open");
});

c.addEventListener("click", () => {
  c.classList.remove("open");
  nav.classList.toggle("open");
  menu.classList.remove("closed");
});
