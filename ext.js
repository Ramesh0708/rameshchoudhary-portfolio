const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const clock = document.querySelector("[data-clock]");
const cursor = document.querySelector(".cursor");
const tilt = document.querySelector(".tilt");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = window.matchMedia("(pointer: fine)").matches;

function setSticky() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

function setClock() {
  if (!clock) return;
  const now = new Date();
  clock.textContent = now.toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
}

window.addEventListener("scroll", setSticky, { passive: true });
setSticky();
setClock();
setInterval(setClock, 1000);

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("nav-open", open);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  });
}

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});

if (cursor && fine) {
  cursor.hidden = false;
  window.addEventListener(
    "pointermove",
    (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    },
    { passive: true }
  );
}

if (tilt && fine && !reduce) {
  const parent = tilt.parentElement;
  parent.addEventListener("pointermove", (event) => {
    const box = parent.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    tilt.style.transform = `rotate(${-3 + x * 8}deg) translateY(${y * 10}px)`;
  });
  parent.addEventListener("pointerleave", () => {
    tilt.style.transform = "rotate(-3deg)";
  });
}
