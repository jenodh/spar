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

// EVENT FORM

const eventForm = document.querySelector(".event-form");
const emailInput = document.querySelector("#event-email");
const emailError = document.querySelector("#email-error");
const formSuccess = document.querySelector(".form-success");

// Use custom validation messages
eventForm.noValidate = true;

// When the form is submitted
eventForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Clear previous messages
  emailError.textContent = "";
  formSuccess.textContent = "";
  emailInput.removeAttribute("aria-invalid");

  // Check if the email is valid
  if (!emailInput.validity.valid) {
    if (emailInput.validity.valueMissing) {
      emailError.textContent = "Fyll i din e-postadress.";
    } else {
      emailError.textContent = "Ange en giltig e-postadress.";
    }

    emailInput.setAttribute("aria-invalid", "true");
    emailInput.focus();

    return;
  }

  // Show confirmation message
  formSuccess.textContent = "Tack! Din anmälan är mottagen.";

  // Clear the input
  eventForm.reset();
});

// Clear error when the user starts typing
emailInput.addEventListener("input", () => {
  emailError.textContent = "";
  emailInput.removeAttribute("aria-invalid");
});
