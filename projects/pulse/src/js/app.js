$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev carousel__slick carousel__slick--prev"><img class="carousel__slick-img"src="../img/carousel/left.jpg"></button>',
        nextArrow: '<button type="button" class="slick-next carousel__slick carousel__slick--next"><img class="carousel__slick-img"src="../img/carousel/right.jpg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  dots: true,
                  arrows: false
                }
            }
        ]
      });
  });