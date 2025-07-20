const accordionItems = document.querySelectorAll(
  ".faq-container__accordion__item"
);

accordionItems.forEach((item) => {
  const header = item.querySelector(".faq-container__accordion__item__header");
  header.addEventListener("click", function () {
    if (item.classList.contains("faq-container__accordion__item--active")) {
      item.classList.remove("faq-container__accordion__item--active");
    } else {
      item.classList.add("faq-container__accordion__item--active");
    }
  });
});
