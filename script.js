// CAROUSEL FUNCTION

function setupCarousel(carouselId, sectionSelector, cardSelector) {
  const carousel = document.querySelector(`#${carouselId}`);

  if (!carousel) return;

  const buttons = document.querySelectorAll(
    `${sectionSelector} .carousel-controls button`,
  );

  // CAROUSEL CONTROLS

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = Number(button.dataset.direction);
      const card = carousel.querySelector(cardSelector);

      if (!card) return;

      const cardWidth = card.offsetWidth;
      const gap = parseFloat(getComputedStyle(carousel).gap) || 0;

      const maxScroll = carousel.scrollWidth - carousel.clientWidth;

      const nextPosition = Math.max(
        0,
        Math.min(
          carousel.scrollLeft + direction * (cardWidth + gap),
          maxScroll,
        ),
      );

      carousel.scrollTo({
        left: nextPosition,
        behavior: "smooth",
      });
    });
  });

  // START POSITION - MOBILE

  if (window.matchMedia("(max-width: 1023px)").matches) {
    const cards = carousel.querySelectorAll(cardSelector);
    const secondCard = cards[1];

    if (secondCard) {
      carousel.scrollLeft =
        secondCard.offsetLeft -
        (carousel.clientWidth - secondCard.offsetWidth) / 2;
    }
  }
}

// PRODUCT CAROUSEL
setupCarousel("product-carousel", ".product-section", ".product-card");

// CATEGORY CAROUSEL
setupCarousel("category-carousel", ".category-section", ".category-card");

// CONTENT CAROUSEL
setupCarousel("content-carousel", ".content-cards", ".content-card");

// GALLERY CAROUSEL
setupCarousel("gallery-carousel", ".gallery-section", ".gallery-card");

// Toggle video playback (play/pause)

const video = document.querySelector(".content-image video");
const videoToggle = document.querySelector(".video-toggle");

videoToggle.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    videoToggle.setAttribute("aria-label", "Pausa video");
  } else {
    video.pause();
    videoToggle.setAttribute("aria-label", "Spela upp video");
  }
});
