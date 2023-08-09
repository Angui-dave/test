window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['<', '>'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1,
                
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    })
  
  // Nos experts

    $('#expert-slider').owlCarousel({
        // effect: 'coverflow',
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 3,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 8.1,
        },
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1200: {
            items: 3
          }
        },
    })
    $('#partener-slider').owlCarousel({
      // effect: 'coverflow',
      loop: true,
      nav: false,
      dots: true,
      smartSpeed: 900,
      items: 3,
      center: true,
      autoplay: true,
      autoplayTimeout: 4000,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 8.1,
      },
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1200: {
          items: 3
        }
      },
  })
  $('#blog-slider').owlCarousel({
    // effect: 'coverflow',
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 900,
    items: 3,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 8.1,
    },
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      }
    },
})
});

// Slide services
var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesToShow: 3,
    loop: true,
    center: true,
    slidesPerGroup: 1,
    slidesPerView: 'auto',
    autoplay: true,
    slidesPerView: 2,
    autoplayTimeout: 2000,
    spaceBetween: 30,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:3
      }
  },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 4.2,
    },
    pagination: {
      // el: '.swiper-pagination',
      // clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  // Owlcarousel nos experts
// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel(
  var TrandingSlider = new Swiper('#swiper-slide',
      {
      loop:true,
      margin:150,
      nav:true,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      center: true,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
    });
  // });

    var swiper = new Swiper("#swiper-slide", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      autoplay: true,
      autoplayTimeout: 4000,
      // slidesPerGroup: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });