const openBtn = document.querySelector("#mobile__open");

const closeBtn = document.querySelector("#mobile__close");
const leftNav = document.querySelector("#leftNav");

openBtn.addEventListener("click", (e) => {
  leftNav.style.display = "block";
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", (e) => {
  leftNav.style.display = "none";
  openBtn.style.display = "block";
  closeBtn.style.display = "none";
});
