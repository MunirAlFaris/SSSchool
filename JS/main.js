// Start Menu
let menuBtn = document.querySelector(".menu");
let spans = document.querySelectorAll(".menu span");
let nav = document.querySelector("header nav");

menuBtn.addEventListener("click", () => {
  if (menuBtn.dataset.state === "false") {
    nav.classList.add("active");
    spans.forEach((span) => {
      span.classList.add("active");
    });
    menuBtn.dataset.state = "true";
  } else {
    nav.classList.remove("active");
    spans.forEach((span) => {
      span.classList.remove("active");
    });
    menuBtn.dataset.state = "false";
  }
});
// End Menu
