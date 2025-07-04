const toggleBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// Abre/fecha o menu mobile
toggleBtn.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.contains("hidden");

    if (isHidden) {
        mobileMenu.classList.remove("hidden", "scale-y-0");
        mobileMenu.classList.add("scale-y-100");
        toggleBtn.classList.remove("bi-list");
        toggleBtn.classList.add("bi-x");
    } else {
        mobileMenu.classList.remove("scale-y-100");
        mobileMenu.classList.add("scale-y-0");
        // Aguarda a transição antes de esconder
        setTimeout(() => {
            mobileMenu.classList.add("hidden");
        }, 300); // tempo igual ao duration do Tailwind
        toggleBtn.classList.remove("bi-x");
        toggleBtn.classList.add("bi-list");
    }
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove("scale-y-100");
        mobileMenu.classList.add("scale-y-0");
        setTimeout(() => {
            mobileMenu.classList.add("hidden");
        }, 300);
        toggleBtn.classList.remove("bi-x");
        toggleBtn.classList.add("bi-list");
    });
});

const track = document.getElementById("carousel-track");
const slides = track.children;
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentSlide = 0;

function updateSlide() {
    const width = slides[0].offsetWidth;
    track.style.transform = `translateX(-${width * currentSlide}px)`;
}

next.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
});

prev.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
});

// opcional: auto-play
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
}, 5000);

