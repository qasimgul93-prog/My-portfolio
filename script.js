
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
