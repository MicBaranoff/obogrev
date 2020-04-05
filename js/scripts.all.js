(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function(){
    $('.langs').on('mouseenter', function(){
        $('.langs').addClass('active');
    });

    $('.langs').on('mouseleave', function(){
        $('.langs').removeClass('active');
    });

    $('.advantages .item .plus').on('click', function(){
        $(this).parent().toggleClass('active');
        $(this).parent().find('p').slideToggle(300);
    });

    $('.bigphotoSlider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        fade: true,
        slidesToShow: 1,
        adaptiveHeight: true
      });

      $('.doorSlider').slick({
        dots: false,
        arrows: true,
        prevArrow: 'section.interior .prev',
        nextArrow: 'section.interior .next',
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        asNavFor: '.imgslider'
      });

      $('.imgslider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        asNavFor: '.doorSlider'
      });

      $('.clientsSlider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        appendDots: '.clientsSlider-dots',
        prevArrow: '.clients .arrows .prev',
        nextArrow: '.clients .arrows .next',
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        asNavFor: '.doorSlider'
      });
      $('.clientsSlider .slide .more').on('click',function(){
            $(this).parent().find('.text').addClass('active');
            $(this).hide();
      });

      $('.input .inputit').on('blur', function(){
        if($(this).val().length > 0){
            $(this).parent().find('label').addClass('active');
        } else $(this).parent().find('label').removeClass('active');
    });

      $('.bigphotoSlider-nav .slide').on('click',function(){
        $('.bigphotoSlider-nav .slide').removeClass('active');
          $(this).addClass('active');
          let id= $(this).index();
          $(this).parent().parent().find('.bigphotoSlider').slick("slickGoTo", id);
      })

      
});
},{}]},{},[1]);
