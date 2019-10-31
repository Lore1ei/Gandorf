$('.slidering').slick({
    fade:true,
    speed: 900,
    cssEase: 'linear',
    dots: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
});

new WOW().init();

let scrolling = $('header');


$(window).scroll(function(){
    if ( $(this).scrollTop() >= 150 && scrolling.hasClass("header") ){
      scrolling.addClass("scroll");
      $('.header__logo').html('<img src="img/black_logo.png" alt="logo">');
      $('.header__about__menu').html('<img src="img/black_group.png" alt="menu">');
    } else if($(this).scrollTop() <= 150 && scrolling.hasClass("scroll")) {
      scrolling.removeClass("scroll");
      $('.header__logo').html('<img src="img/logo.png" alt="logo">');
      $('.header__about__menu').html('<img src="img/Group.svg" alt="menu">');
    }
  });


let products = $('.products-flex__item');
$(products).mouseover(function(){
    let num =  $(this).data('note') ;
    let product = $('.products-flex__item' + num);
$(product).mouseover(function(){
    $('.products-flex__item_' + num).css(
        {'border' : 'none',
        'transition': 'all 2s ease'}
    );
    $('.img' + num).css(
        {'transform': 'rotate(180deg)',
        'transition': 'all 2s ease'}
    );
  });
  $(product).mouseleave(function(){
    $('.products-flex__item_' + num).css(
        {'borderBottom' : '2px solid rgba(50, 50, 50, 0.3)',
        'transition': 'all 2s ease'}
    );
    $('.img' + num).css(
        {'transform': 'rotate(0deg)',
        'transition': 'all 2s ease'}
    );
});
});

let img = $('.slider-item__img')
$('.slidering').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.slider-item__count__num').html(nextSlide + 1 + '/' + img.length );
  });