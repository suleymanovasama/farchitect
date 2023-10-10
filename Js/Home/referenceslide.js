
var swiper = new Swiper(".mySwiperReference", {
    slidesPerView: 2,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    on: {
      resize: function () {
        if (window.innerWidth < 500) {
          this.params.slidesPerView = 1.5;
          this.params.spaceBetween = 16;
          this.update();
        } 
      }
    }
  });
