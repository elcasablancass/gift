$(document).ready(function(){

    $('.slick').slick({
        dots: false, 
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
    });

    $("#buttonPlay").on("click", function(e) {
        e.preventDefault();
        $("#popups-show").fadeIn();
        let music = document.getElementById("birthdayMusic");
        music.play();
    });

    $("#stop").on("click", function() {
        $("#popups-show").fadeOut();
        let music = document.getElementById("birthdayMusic");
        music.pause();
    });
});