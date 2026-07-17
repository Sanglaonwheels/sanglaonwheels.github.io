// ==============================
// Sangla On Wheels - script.js
// ==============================

// Sticky Navbar
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 80) {
        navbar.style.background = "rgba(0,0,0,0.90)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        navbar.style.background = "rgba(0,0,0,0.45)";
        navbar.style.boxShadow = "none";
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".card, .vehicle, .gallery-grid img")
.forEach((el) => observer.observe(el));

// Gallery Lightbox
document.querySelectorAll(".gallery-grid img").forEach(img => {
    img.addEventListener("click", () => {
        const lightbox = document.createElement("div");
        lightbox.style.position = "fixed";
        lightbox.style.top = "0";
        lightbox.style.left = "0";
        lightbox.style.width = "100%";
        lightbox.style.height = "100%";
        lightbox.style.background = "rgba(0,0,0,0.9)";
        lightbox.style.display = "flex";
        lightbox.style.justifyContent = "center";
        lightbox.style.alignItems = "center";
        lightbox.style.zIndex = "9999";

        const image = document.createElement("img");
        image.src = img.src;
        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.borderRadius = "10px";

        lightbox.appendChild(image);

        lightbox.addEventListener("click", () => {
            lightbox.remove();
        });

        document.body.appendChild(lightbox);
    });
});

// Hero Image Slider (optional)
const heroImages = [
    "images/hero.jpg",
    "images/gallery1.jpg",
    "images/gallery2.jpg"
];

let currentHero = 0;

setInterval(() => {
    currentHero = (currentHero + 1) % heroImages.length;

    const hero = document.querySelector(".hero");

    if (hero) {
        hero.style.background =
            `linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)), url('${heroImages[currentHero]}') center/cover no-repeat`;
    }
}, 5000);
