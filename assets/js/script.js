// =========================
// FAQ
// =========================

const faqItems = document.querySelectorAll(".faq-item");

if (faqItems.length) {

    faqItems.forEach(item => {

        const button = item.querySelector(".faq-question");

        if (button) {

            button.addEventListener("click", () => {
                item.classList.toggle("active");
            });

        }

    });

}

// =========================
// Active Menu
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =========================
// Smooth Scroll
// =========================

document.querySelectorAll("nav a").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// =========================
// Reveal Animation
// =========================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < window.innerHeight - revealPoint) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();

// =========================
// Counter
// =========================

const counters = document.querySelectorAll(".counter");

function animateCounters() {

    counters.forEach(counter => {

        const target = +counter.dataset.target;
        let count = 0;

        function update() {

            const increment = Math.ceil(target / 80);

            count += increment;

            if (count >= target) count = target;

            if (target === 100) {
                counter.innerHTML = count + "%";
            } else {
                counter.innerHTML = count + "+";
            }

            if (count < target) {
                requestAnimationFrame(update);
            }

        }

        update();

    });

}

const aboutSection = document.querySelector(".about");

if (aboutSection) {

    const observer = new IntersectionObserver(entries => {

        if (entries[0].isIntersecting) {

            animateCounters();
            observer.disconnect();

        }

    });

    observer.observe(aboutSection);

}

// =========================
// Back To Top
// =========================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            backToTop.style.display = "flex";

        } else {

            backToTop.style.display = "none";

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// =========================
// Loader
// =========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.classList.add("hide");
    }

});

// =========================
// Progress Bar
// =========================

const progressBar = document.getElementById("progressBar");

if (progressBar) {

    window.addEventListener("scroll", () => {

        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = progress + "%";

    });

}

// =========================
// Gallery Lightbox
// =========================

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

if (lightbox && lightboxImg && closeLightbox) {

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.classList.add("active");
            lightboxImg.src = img.src;

        });

    });

    closeLightbox.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {
            lightbox.classList.remove("active");
        }

    });

}
