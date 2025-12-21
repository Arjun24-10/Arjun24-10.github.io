/* ---------------- Typing Effect ---------------- */
const words = ["Web Developer", "Developer", "Web Designer", "Youtuber", "Script Writer"];
let i = 0, j = 0, isDeleting = false;
const speed = 100;
const typedText = document.getElementById("typed-text");

function type() {
  let current = words[i];
  typedText.textContent = isDeleting ? current.substring(0, j--) : current.substring(0, j++);

  if (!isDeleting && j === current.length + 1) {
    isDeleting = true;
    setTimeout(type, 1200);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? speed / 2 : speed);
  }
}
type();

/* ---------------- Fade on Scroll ---------------- */
const observer = new IntersectionObserver(
  entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("visible")),
  { threshold: 0.1 }
);

document.querySelectorAll(".fade-on-scroll").forEach(el => observer.observe(el));

/* ---------------- Dynamic Active Navigation ---------------- */
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

function updateActiveLink() {
  let scrollPos = window.scrollY + 200;

  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(link => link.classList.remove("active"));
      document.querySelector(`nav a[href="#${sec.id}"]`)?.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);

navLinks.forEach(link =>
  link.addEventListener("click", function () {
    navLinks.forEach(a => a.classList.remove("active"));
    this.classList.add("active");
  })
);


/* -------------------------------------------------------
   SCROLL DARKENING GRADIENT — ADDED AS REQUESTED
------------------------------------------------------- */
window.addEventListener("scroll", () => {
  const progress =
    window.scrollY / (document.body.scrollHeight - window.innerHeight);

  const factor = Math.min(progress, 1);

  // Light → Dark colors
  const start = `rgb(${30 - 20 * factor}, ${60 - 40 * factor}, ${114 - 70 * factor})`;
  const end   = `rgb(${42 - 25 * factor}, ${82 - 50 * factor}, ${152 - 90 * factor})`;

  document.documentElement.style.setProperty("--grad-start", start);
  document.documentElement.style.setProperty("--grad-end", end);
});

