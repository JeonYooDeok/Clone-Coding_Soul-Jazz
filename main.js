const featuredSwiper = new Swiper('.featuredNews.swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

const soulJazzRecordsSwiper = new Swiper('.soulJazzRecordsBookTitles.swiper', {
  slidesPerView: 1,
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});