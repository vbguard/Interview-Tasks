"use strict";

//Modal
//
const list = document.querySelector(".js-gallery-list");
const modal = document.querySelector(".js-modal");

// Create container for Modal items
const container = document.createElement("div");

// Add Event Listener for elements
list.addEventListener("click", evt => handleOnClickImage(evt));
modal.addEventListener("click", evt => handleOnCloseModalBtn(evt));

// Handle Click Functions
// ---> Handle Click on Image
const handleOnClickImage = evt => {
  evt.preventDefault();
  const nodeName = evt.target.nodeName;
  if (nodeName !== "IMG") return;

  const imageSrc = evt.target.src;
  const imageAlt = evt.target.alt;

  modal.append(
    createItemToModal({
      src: imageSrc,
      alt: imageAlt
    })
  );
  modal.classList.add("modal--open");
};

// ---> Handle Click on Close Modal
const handleOnCloseModalBtn = evt => {
  evt.preventDefault();

  const nodeName = evt.target.nodeName;

  if (nodeName !== "BUTTON") return;
  container.innerHTML = "";
  modal.classList.remove("modal--open");
  modal.classList.add("modal--close");
  setTimeout(() => {
    modal.classList.remove("modal--close");
  }, 1000);
};

// Function create markup for Modal
const createItemToModal = ({ src, alt }) => {
  container.className = "modal__container";

  const title = document.createElement("h2");
  title.textContent = alt;
  title.className = "modal__title";

  const image = document.createElement("img");
  image.alt = alt;
  image.src = src;
  image.className = "modal__image";

  const closeBtn = document.createElement("button");
  closeBtn.className = "modal__btn btn btn--close js-modal-btn-close";

  container.append(title, image, closeBtn);

  return container;
};
