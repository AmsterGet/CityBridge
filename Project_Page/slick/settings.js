  $('.cards-slider').slick({
   infinite: true,
   speed: 1200,
   slidesToShow: 3,
   slidesToScroll: 3,
   swipeToSlide: true,
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
        slidesToScroll: 3,
        arrows: false
      }
    },
    {
      breakpoint: 1100,
      settings: {
        centerPadding: '110px',
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
      }
    }
   ]
  });
