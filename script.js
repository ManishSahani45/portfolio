particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#38bdf8" },
    size: { value: 3 },
    move: { speed: 1 },
    line_linked: { enable: true, opacity: 0.2 }
  }
});

const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
