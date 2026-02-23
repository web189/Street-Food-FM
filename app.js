// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll Animation
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

/* ========================= */
/* HERO TYPING EFFECT */
/* ========================= */

const text = "Jeruk Peras Pontianak • Stick Kentang Kriwil • Cimol Kopong";
const typingElement = document.querySelector(".typing-text");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}

window.addEventListener("load", typeEffect);

/* ========================= */
/* SCROLL ANIMATION MENU */
/* ========================= */

const menuCards = document.querySelectorAll(".card");

function showCards() {
  menuCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showCards);
window.addEventListener("load", showCards);

/* ========================= */
/* LOADING SCREEN SCRIPT */
/* ========================= */

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 1500); // durasi loading (1.5 detik)
});

/* ========================= */
/* CRISPY PARTICLE EFFECT */
/* ========================= */

const particlesContainer = document.querySelector(".particles");

for (let i = 0; i < 20; i++) {
  const span = document.createElement("span");

  const x = (Math.random() - 0.5) * 200 + "px";
  const y = (Math.random() - 0.5) * 200 + "px";

  span.style.setProperty("--x", x);
  span.style.setProperty("--y", y);
  span.style.top = "40px";
  span.style.left = "40px";
  span.style.animationDelay = Math.random() * 1.5 + "s";

  particlesContainer.appendChild(span);
}

/* Hide loader saat web siap */
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 2000);
});

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".navbar nav");

  if (hamburger && nav) {

    hamburger.addEventListener("click", function () {
      nav.classList.toggle("active");
      hamburger.classList.toggle("open");
    });

  }

});

