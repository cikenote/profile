
let logo = document.querySelector("#logo");

logo.addEventListener("click", () => {
  window.location.href = "/";
});

gsap.from("nav", { duration: 1, y: -300, opacity: 0 });
// gsap.from("#header-image", {
//   duration: 2,
//   x: 300,
//   opacity: 0,
//   scale: 0.5,
//   ease: "bounce",
// });

const cursor = document.querySelector(".custom-cursor");

document.onmousemove = (e) => {
  cursor.style.transform = `translate(${e.pageX + 10}px, ${e.pageY + 10}px)`;
};
