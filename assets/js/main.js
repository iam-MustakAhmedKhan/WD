
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
    speedAsDuration: true,
    easing: 'linear',
    delay:0
});


$(document).ready(function () {

    $('#carousel').owlCarousel({
        loop: true,
        dots: true,
        slideSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        items: 1,
        resonsiveClass: true,
        responsiveRefreshRate: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            },
            1920: {
                items: 1
            }

        }

    });
    wow = new WOW();
    wow.init();

});



const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 62) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");

    }
});


$(document).ready(function () {
    $(document).on('click', 'ul li', function () {
        $(this).addClass('current').siblings().removeClass('current');
    });
});

$('.navbar-nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
});


const navtogglebtn = document.querySelector('.hamburger');

navtogglebtn.addEventListener('click', function () {
    asideSectiontogglebtn();
});

function asideSectiontogglebtn() {
    cross();

}
function cross() {
    navtogglebtn.classList.toggle('cross');
}

// $('.slider').slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     cssEase: 'linear'
//   });


$(function () {
    $('#countdown').countdown({
        year: 2022,// YYYY Format
        month: 1,// 1-12
        hour: 0,// 24 hour format 0-23
        minute: 0,// 0-59
        second: 0,// 0-59
        timezone: -6,
        labels:true
    });
});
