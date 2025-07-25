const accordionItems = document.querySelectorAll(
  ".faq-container__accordion__item"
);

accordionItems.forEach((item) => {
  const header = item.querySelector(".faq-container__accordion__item__header");
  header.addEventListener("click",(event)=> toggleAccordion(event,header));
});

function toggleAccordion(_event,header){
  if(header.attributes["aria-expanded"].value === "true"){
    header.attributes["aria-expanded"].value = "false";
  }
  else{
    header.attributes["aria-expanded"].value = "true";
  }
}
