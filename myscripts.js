// wrapper. Wait till DOM loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM Content Loaded");
    
    // Slideshow on main page
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 5000); // Change image every 5 seconds
    }
    
    // goto order page in case of main page 'Buy now' button pushed
    let button = document.querySelector('#btn');
    console.log("Selector assigned:", button);

    button.addEventListener('click', function() {
        console.log("Button is clicked");
        document.location.href = "/pages/order.html";
                })
                
                
})