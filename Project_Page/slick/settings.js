  $('.cards-slider').slick({
   infinite: true,
   speed: 1200,
   slidesToShow: 3,
   slidesToScroll: 1,
   focusOnSelect: true,
   centerMode: true,
   centerPadding: '200px',
   arrows: false,
   responsive: [
    {
      breakpoint: 1620,
      settings: {
        centerPadding: '150px',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 1100,
      settings: {
        centerPadding: '110px',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
      }
    }
   ]
  });

  function checkActive() {
      let arr = document.querySelectorAll('.slider-item');
      arr.forEach(function (item) {
          if (item.classList.contains('slick-active')) {
              item.classList.remove('transparent');
          } else {
              item.classList.add('transparent');
          }
      });
  }

  checkActive();

  $('.slider-item').click(function () {
      checkActive();
  });
