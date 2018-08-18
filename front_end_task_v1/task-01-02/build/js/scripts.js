"use strict";

//Modal
//

var list = document.querySelector(".js-gallery-list");
var modal = document.querySelector(".js-modal");

// Create container for Modal items
var container = document.createElement("div");

// Add Event Listener for elements
list.addEventListener("click", function (evt) {
  return handleOnClickImage(evt);
});
modal.addEventListener("click", function (evt) {
  return handleOnCloseModalBtn(evt);
});

// Handle Click Functions
// ---> Handle Click on Image
var handleOnClickImage = function handleOnClickImage(evt) {
  evt.preventDefault();
  var nodeName = evt.target.nodeName;
  if (nodeName !== "IMG") return;

  var imageSrc = evt.target.src;
  var imageAlt = evt.target.alt;

  modal.append(createItemToModal({
    src: imageSrc,
    alt: imageAlt
  }));
  modal.classList.add("modal--open");
};

// ---> Handle Click on Close Modal
var handleOnCloseModalBtn = function handleOnCloseModalBtn(evt) {
  evt.preventDefault();

  var nodeName = evt.target.nodeName;

  if (nodeName !== "BUTTON") return;
  container.innerHTML = "";
  modal.classList.remove("modal--open");
  modal.classList.add("modal--close");
  setTimeout(function () {
    modal.classList.remove("modal--close");
  }, 1000);
};

// Function create markup for Modal
var createItemToModal = function createItemToModal(_ref) {
  var src = _ref.src,
      alt = _ref.alt;

  container.className = "modal__container";

  var title = document.createElement("h2");
  title.textContent = alt;
  title.className = "modal__title";

  var image = document.createElement("img");
  image.alt = alt;
  image.src = src;
  image.className = "modal__image";

  var closeBtn = document.createElement("button");
  closeBtn.className = "modal__btn btn btn--close js-modal-btn-close";

  container.append(title, image, closeBtn);

  return container;
};