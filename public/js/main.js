// Sub Banner
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    let subBanner = document.getElementById("sub-banner")

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";

    if (slideIndex == 1) {
        subBanner.style.backgroundColor = "#ffc602";
    }
    if (slideIndex == 2) {
        subBanner.style.backgroundColor = "#ffb700";
    }
    if (slideIndex == 3) {
        subBanner.style.backgroundColor = "#4a911c";
    }
}

// 
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:2,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});