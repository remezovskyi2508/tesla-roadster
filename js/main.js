$(function(){
    $('.slider').slick({
        fade: true,
        arrows: false,
        dots: true,
        autoplay: 3000,
        markers: false,
    });

    $('.header-btn').on('click', function(){
        $('.menu').addClass('active');
});
    $('.close-btn').on('click', function(){
        $('.menu').removeClass('active');
});

});