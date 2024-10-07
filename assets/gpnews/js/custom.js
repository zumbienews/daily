$(document).ready(function () {
    $('.latest_post').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: false,
        dots: true,
        responsive: {
            0: {
                margin: 10,
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.slider').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                margin: 10,
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    if ($(window).width() < 768) {
        var element = document.querySelector(".main-navigation .main-nav ul li.current-menu-item");
        element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }

});
