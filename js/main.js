let swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});

let smoothLinks = document.querySelectorAll('.js-menu-link[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        let id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        document.querySelector('.popup-menu').classList.remove('opened');
    });
};

let popupMenu = (btn, target) => {
  let $btn = document.querySelectorAll(btn),
      $target = document.querySelector(target);

  [].forEach.call($btn, function(el) {
    el.addEventListener('click', function() {
      $target.classList.toggle('opened');
    });
  });
}

popupMenu('.popup-btn', '.js-popup-wrap');
popupMenu('.popup-menu-btn', '.popup-menu');
