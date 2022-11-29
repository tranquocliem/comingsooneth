ScrollReveal({
  distance: "60px",
  duration: 1100,
  delay: 400,
  reset: true,
  mobile: true,
});

ScrollReveal().reveal(".logo", {
  delay: 1000,
  origin: "top",
  reset: true,
  rotate: {
    x: 180,
    y: 0,
    z: 180,
  },
  easing: "ease-in",
  scale: 0.75,
});

ScrollReveal().reveal(".coming", {
  delay: 500,
  origin: "left",
  reset: true,
  easing: "ease-in",
});

ScrollReveal().reveal(".building", {
  delay: 300,
  origin: "bottom",
  reset: true,
  easing: "ease-in",
});

const styleLogo = document.querySelector(".logo");

setTimeout(() => {
  styleLogo.style.transform = "translate(-50%, -50%)";
}, 2500);
