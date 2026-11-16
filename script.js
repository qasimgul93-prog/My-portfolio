
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
