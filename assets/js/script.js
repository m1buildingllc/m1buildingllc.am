const faqItems = document.querySelectorAll(".faq-item");

if (faqItems.length) {

    faqItems.forEach(item => {

        const button = item.querySelector(".faq-question");

        button.addEventListener("click", () => {

            item.classList.toggle("active");

        });

    });

}

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

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();

const counters = document.querySelectorAll(".counter");

const animateCounters = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;
        let count = 0;

        const update = () => {

            const increment = Math.ceil(target / 80);

            count += increment;

            if (count >= target) {
                count = target;
            }

            if (target === 100) {
                counter.innerHTML = count + "%";
            } else {
                counter.innerHTML = count + "+";
            }

            if (count < target) {
                requestAnimationFrame(update);
            }

        };

        update();

    });

};

const aboutSection = document.querySelector(".about");

const observer = new IntersectionObserver(entries => {

    if (entries[0].isIntersecting) {

        animateCounters();
        observer.disconnect();

    }

});

observer.observe(aboutSection);

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){
        backToTop.style.display = "flex";
        backToTop.style.justifyContent = "center";
        backToTop.style.alignItems = "center";
    }else{
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.classList.add("hide");

});

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

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

    if(e.target === lightbox){
        lightbox.classList.remove("active");
    }

});
