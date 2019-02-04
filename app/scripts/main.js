$(function () {
  rexpo();
});

const rexpo = function () {
  const data = {
    init: function () {
      this.resume();
      this.pluginCall();
      this.navigation();
      this.misc();

    },
    resume: function () {

      $('.experience').hide();
      $('.btn-education, .btn-experience').on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('btn-education')) {
          $('.btn-experience').removeClass('active-btn');
          $('.btn-education').addClass('active-btn');
          $('.experience').fadeOut(300, function () {
            $('.education').fadeIn(500);
          });
        } else if ($(this).hasClass('btn-experience')) {
          $('.btn-education').removeClass('active-btn');
          $('.btn-experience').addClass('btn-secondary active-btn');
          $('.education').fadeOut(300, function () {
            $('.experience').fadeIn(500);
          });
        }
      });
    },
    navigation: function () {

      $('.res-icon').on('click', function () {
        $('#nav').toggleClass('show');
      });

      $('#nav li').bind('click', function () {
        $('#nav').removeClass('show');
      });
    },
    misc: function () {

      $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
          $('header').addClass('nav-bg');
        } else {
          $('header').removeClass('nav-bg');
        }
      });

    },
    pluginCall: function () {
      new WOW().init();
      $('.skillbar').addClass('wow').skillbar();
      $('.info-box h3').counterUp({
        time: 2000
      });

      let typed = new Typed('.styled-text', {
        strings: ['I am a Designer', 'I am a Dreamer', 'I am a Developer'],
        typeSpeed: 50,
        fadeOut: false,
        cursorChar: ' ',
        shuffle: false,
        smartBackspace: true,
        loop: true,
      });


      $('.portfolio-slider').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        responsive: {
          0: {
            items: 1
          },
          360: {
            items: 1
          },
          768: {
            items: 1
          },
          991: {
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


      $('.testimonial-item').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        responsive: {
          0: {
            items: 1
          },
          360: {
            items: 1
          },
          768: {
            items: 1
          },
          991: {
            items: 2
          },
          1200: {
            items: 2
          },
          1920: {
            items: 2
          }
        }
      });

      $('#nav').onePageNav();
    },
  };
  data.init();
};
