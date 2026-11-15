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
