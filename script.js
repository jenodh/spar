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

// Gallery Carousel

const galleryCarousel = document.querySelector("#gallery-carousel");

const galleryButtons = document.querySelectorAll(
  ".gallery-section .carousel-controls button",
);

galleryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const direction = Number(button.dataset.direction);

    const galleryCard = galleryCarousel.querySelector(".gallery-card");
    const cardWidth = galleryCard.offsetWidth;

    const gap = parseFloat(getComputedStyle(galleryCarousel).gap);

    const maxScroll = galleryCarousel.scrollWidth - galleryCarousel.clientWidth;

    const nextPosition =
      galleryCarousel.scrollLeft + direction * (cardWidth + gap);

    galleryCarousel.scrollTo({
      left: Math.max(0, Math.min(nextPosition, maxScroll)),
      behavior: "smooth",
    });
  });
});
