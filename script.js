
const thumbnails = document.querySelectorAll(".thumbnail");

const mainImage = document.getElementById("mainImage");

const imageTitle = document.getElementById("imageTitle");

thumbnails.forEach(function(button) {

    button.addEventListener("click", function() {

        const newImage = button.getAttribute("data-image");

        const newTitle = button.getAttribute("data-title");

        mainImage.src = newImage;

        imageTitle.textContent = newTitle;

    });

});
// Fade-in animation for website sections
const sections = document.querySelectorAll(
    "header, section"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach((section) => {
    section.classList.add("fade-in");
    observer.observe(section);
});
// Back to Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Hide Loading Screen
const loader = document.getElementById("loader");

if (loader) {
    loader.style.display = "none";
}
