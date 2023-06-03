// ------------------ nav toggle


$(document).ready(function() {
    $('.nav__toggle').click(function() {
      $('.nav').toggleClass('active');
      $('.nav__toggle').toggleClass('active');
    });
  });

let headerHeight = $('.header').height() + $('.menu').height();
let scrollHeight = () => document.documentElement.scrollTop;


function onScroll () {
  $(window).on('scroll', function() {
    if (scrollHeight() >= headerHeight) {
      $('.header').addClass('fixed').stop().animate({ top: 0 }, 500);
    } else {
      $('.header').removeClass('fixed').stop().animate({ top: -headerHeight }, 500);
      $('.nav').removeClass('active');
      $('.nav__toggle').removeClass('active');
    }
  });
};

onScroll();

// -------------------- smooth scroll

Array.from($('nav a')).forEach((link) =>{
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const navbarHeight = $('.header').height();
    const scrollToPosition = targetElement.offsetTop - navbarHeight ;

    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });

  })
});




// --------------------slider


let i = 2;

function sliderFlipper () {
  if (i >= 4) {
    i = 1;
  } else {
    i++
  }

  let circles = $(`.circles div:nth-child(${i})`);

  $('.circles div').removeClass('active');
  circles.addClass('active');
  $('.slider img').addClass('animate');
  $('.slider img').attr('src', `../img/main/slider_${i}.jpg`);

  function classRemover() {
    $('.slider img').removeClass('animate')
  };

  setTimeout( classRemover, 1100);
};

setInterval(sliderFlipper, 5000)

  $('.slider__arrow__right').on('click', function(){

    if (i >= 4) {
      i = 1;
    } else {
      i++
    }

    let circles = $(`.circles div:nth-child(${i})`);

    $('.circles div').removeClass('active');
    circles.addClass('active');
    $('.slider img').addClass('animate');
    $('.slider img').attr('src', `../img/main/slider_${i}.jpg`);

    function classRemover() {
      $('.slider img').removeClass('animate')
    };

    setTimeout( classRemover, 1100);
  });

  $('.slider__arrow__left').on('click', function () {

      if (i <= 1) {
        i = 4;
      } else {
        i--;
      }

      let circles = $(`.circles div:nth-child(${i})`);

      $('.circles div').removeClass('active');
      circles.addClass('active');
      $('.slider img').addClass('animate');
      $('.slider img').attr('src', `../img/main/slider_${i}.jpg`);

      function classRemover() {
        $('.slider img').removeClass('animate')
      };

      setTimeout( classRemover, 1100);
  });


  // ------------------- copy mail


  $(document).ready(function() {
    $('.mail').click(function() {
      $('.mail').toggleClass('active');

      $('.mail.active').click(function() {
        let mailText = $('.mail').text().trim();
        navigator.clipboard.writeText(mailText);
        alert('Email copied: ' + mailText);
      });
    });

  });

// ---------------------- phone bar 


$(document).ready(function(){
    $('.phone').hover(function(){
      let targetOffset = $('.phone').offset();
      let targetBottom = $('.mail').outerHeight();
      let targetRight = window.innerWidth - (targetOffset.left + $('.mail').outerWidth()) +9;

      $('.phone__bar').css({
        top: targetBottom,
        right: targetRight
      });

      $('.phone__bar').removeClass('disabled');
      $('.phone__bar').animate({ opacity: 1, height: 'fast' }, 'fast');
      $('.phone__bar__bg').fadeIn('fast');

      
    }, function(){});

    $('.phone__bar .close').click(function(){
      $('.phone__bar').animate({ opacity: 0, height: 'fast' }, 'fast');
      $('.phone__bar').addClass('disabled');
      $('.phone__bar__bg').fadeOut('fast');
    });

    $('.phone__bar__bg').click(function(){
      if ($('.phone__bar').hasClass('disabled')) {        
      } else {
        $('.phone__bar').animate({ opacity: 0, height: 'fast' }, 'fast');
        $('.phone__bar').addClass('disabled');
        $('.phone__bar__bg').fadeOut('fast');
      }
    });

    

  $('.phone').click(function(){
    if ($('.phone__bar').hasClass('disabled')){
    }  else {
     $('.phone__bar').animate({ opacity: 0, height: 'fast' }, 'fast');
     $('.phone__bar').addClass('disabled');
     $('.phone__bar__bg').fadeOut('fast');
    }
  });

});


// ------------------------- cart hover

$(document).ready(function() {
  const cartImage = $('.cart__inner img');

  $('.cart__link').hover(function() {
    cartImage.fadeOut(300, function() {
      cartImage.attr('src', '../img/header/cartHover.png').fadeIn(200);
    });
  }, function() {
    cartImage.fadeOut(300, function() {
      cartImage.attr('src', '../img/header/cart.png').fadeIn(200);
    });
  });
});

//  ---------------------------- focus input

$(document).ready( function() {
  const input = $('div.menu > form:nth-child(2) > input:nth-child(2)');
  const phoneBarBgTopPosition = $('header.menu').outerHeight() + $('header.header').outerHeight();

  input.focus(function () {
    $('.phone__bar__bg').css({
      top: phoneBarBgTopPosition,
    });
    $('.phone__bar__bg').fadeIn('fast');
  });
});


