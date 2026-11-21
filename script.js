// Product carousel

const productCarousel = document.querySelector("#product-carousel");

const productButtons = document.querySelectorAll(
  ".product-section .carousel-controls button",
);

productButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const direction = Number(button.dataset.direction);

    const productCard = productCarousel.querySelector(".product-card");
    const cardWidth = productCard.offsetWidth;

    const gap = parseFloat(getComputedStyle(productCarousel).gap);

    productCarousel.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  });
});

// START POSITION - PRODUCT CAROUSEL (MOBILE)

if (window.matchMedia("(max-width: 1023px)").matches) {
  const productCards = productCarousel.querySelectorAll(".product-card");
  const secondCard = productCards[1];

  if (secondCard) {
    productCarousel.scrollLeft =
      secondCard.offsetLeft -
      (productCarousel.clientWidth - secondCard.offsetWidth) / 2;
  }
}

// Category carousel

const categoryCarousel = document.querySelector("#category-carousel");

const categoryButtons = document.querySelectorAll(
  ".category-section .carousel-controls button",
);

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const direction = Number(button.dataset.direction);

    const categoryCard = categoryCarousel.querySelector(".category-card");
    const cardWidth = categoryCard.offsetWidth;

    const gap = parseFloat(getComputedStyle(categoryCarousel).gap);

    const maxScroll =
      categoryCarousel.scrollWidth - categoryCarousel.clientWidth;

    const nextPosition =
      categoryCarousel.scrollLeft + direction * (cardWidth + gap);

    categoryCarousel.scrollTo({
      left: Math.max(0, Math.min(nextPosition, maxScroll)),
      behavior: "smooth",
    });
  });
});

// START POSITION - CATEGORY CAROUSEL (MOBILE)

if (categoryCarousel && window.matchMedia("(max-width: 1023px)").matches) {
  const categoryCards = categoryCarousel.querySelectorAll(".category-card");
  const secondCard = categoryCards[1];

  if (secondCard) {
    categoryCarousel.scrollLeft =
      secondCard.offsetLeft -
      (categoryCarousel.clientWidth - secondCard.offsetWidth) / 2;
  }
}

// CONTENT CAROUSEL

const contentCarousel = document.querySelector("#content-carousel");
const contentButtons = document.querySelectorAll(
  ".content-cards .carousel-controls button",
);

if (contentCarousel) {
  contentButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = Number(button.dataset.direction);

      const card = contentCarousel.querySelector(".content-card");
      const cardWidth = card.offsetWidth;

      const carouselStyle = getComputedStyle(contentCarousel);
      const gap = parseFloat(carouselStyle.gap);

      const scrollAmount = cardWidth + gap;

      const maxScroll =
        contentCarousel.scrollWidth - contentCarousel.clientWidth;

      const nextPosition =
        contentCarousel.scrollLeft + scrollAmount * direction;

      const clampedPosition = Math.max(0, Math.min(nextPosition, maxScroll));

      contentCarousel.scrollTo({
        left: clampedPosition,
        behavior: "smooth",
      });
    });
  });
}

// Gallery Carousel

const galleryCarousel = document.querySelector("#gallery-carousel");

const galleryButtons = document.querySelectorAll(
  ".gallery-section .carousel-controls button",
);

if (galleryCarousel) {
  galleryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = Number(button.dataset.direction);

      const galleryCard = galleryCarousel.querySelector(".gallery-card");
      const cardWidth = galleryCard.offsetWidth;

      const carouselWidth = galleryCarousel.clientWidth;

      // Calculate gap based on four visible cards
      const gap = (carouselWidth - cardWidth * 4) / 3;

      const maxScroll =
        galleryCarousel.scrollWidth - galleryCarousel.clientWidth;

      const nextPosition =
        galleryCarousel.scrollLeft + direction * (cardWidth + gap);

      galleryCarousel.scrollTo({
        left: Math.max(0, Math.min(nextPosition, maxScroll)),
        behavior: "smooth",
      });
    });
  });
}
