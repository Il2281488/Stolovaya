$(document).ready(function() {
    $('.nav__toggle').click(function() {
      $('.nav').toggleClass('active');
      $('.nav__toggle').toggleClass('active');
    });
  });

// ----------------- smooth scroll

Array.from($('nav a')).forEach((link) =>{
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const navbarHeight = $('header').height();
    const scrollToPosition = targetElement.offsetTop - navbarHeight ;

    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });

  })
});

//   --------------- slider

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
  $('.slider img').attr('src', `../img/main/slider_${i}.jpg`);
  $('.slider img').addClass('animate');

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
    $('.slider img').attr('src', `../img/main/slider_${i}.jpg`);
    $('.slider img').addClass('animate');

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
      $('.slider img').attr('src', `../img/main/slider_${i}.jpg`);
      $('.slider img').addClass('animate');

      function classRemover() {
        $('.slider img').removeClass('animate')
      };

      setTimeout( classRemover, 1100);
  });