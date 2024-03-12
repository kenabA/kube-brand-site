var testimonialButtons = document.querySelectorAll(".testimonial-button");

const swiperAttr = {
  loop: true,
  mousewheel: false,
  effect: "coverflow",
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 250,
    modifier: 4,
    slideShadows: false,
  },
  slideVisibleClass: "swiper-slide-visible",
  slideActiveClass: "swiper-slide-active",
  allowTouchMove: false,
};

var swiper = new Swiper(".mySwiper", swiperAttr);

testimonialButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var slideIndex = parseInt(this.getAttribute("data-slide"), 10);
    if (slideIndex !== swiper.activeIndex) {
      swiper.slideTo(slideIndex);
    }
  });
});

swiper.on("slideChange", function () {
  var activeIndex = swiper.activeIndex;
  testimonialButtons.forEach(function (button, index) {
    if (index === activeIndex) {
      button.classList.add("active-slide");
    } else {
      button.classList.remove("active-slide");
    }
  });

  const allSlides = document.querySelectorAll(".swiper-slide");

  allSlides.forEach((slide, index) => {
    index == activeIndex
      ? slide.classList.remove("blur")
      : slide.classList.add("blur");
  });
});
