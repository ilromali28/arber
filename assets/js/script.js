$(document).ready(function() {
    var slider = $(".slider");

    slider.slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
        verticalSwiping: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [{
            breakpoint: 991,
            settings: {
                vertical: false,
                verticalSwiping: false
            }
        }]
    });

    var footerDDBtns = $('.footer__title');
    $(footerDDBtns).click(function() {
        $(this).parent().find('.footer__links').toggle();
        $(this).parent().toggleClass("opened");
    })

});

function isMobile() {
    return $('.mobileIndicator').is(':visible');
}