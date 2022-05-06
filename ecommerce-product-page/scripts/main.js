"use strict";

// Handle Image Slider
const previousImageButton = document.querySelector(
  "[data-previous-image-button]"
);
const nextImageButton = document.querySelector("[data-next-image-button]");
const productImage = document.querySelector("[data-product-image]");

const product_images = [
  {
    image: "../images/image-product-1.jpg",
    thumbnail: "../images/image-product-1-thumbnail.jpg",
  },
  {
    image: "../images/image-product-2.jpg",
    thumbnail: "../images/image-product-2-thumbnail.jpg",
  },
  {
    image: "../images/image-product-3.jpg",
    thumbnail: "../images/image-product-3-thumbnail.jpg",
  },
  {
    image: "../images/image-product-4.jpg",
    thumbnail: "../images/image-product-4-thumbnail.jpg",
  },
];

let INDEX = 0;
let LIGHTBOX_INDEX = 0;

function imageSlideHandler(value, changeIndex = null) {
  let CHANGE_INDEX = changeIndex ?? INDEX;

  if (CHANGE_INDEX === 0 && value === -1) return product_images.length - 1;
  if (CHANGE_INDEX === product_images.length - 1 && value === 1) return 0;
  return CHANGE_INDEX + value;
}

function updateImage(productIndex, updateElement = null, elemArr) {
  const imageIndex = productIndex ?? INDEX;
  const productImageElement = updateElement ?? productImage;

  if (updateElement == null) {
    productImage.dataset.productImage = imageIndex;
  }

  productImageElement.src = product_images[imageIndex].image;
  updateThumbnailImageActive(imageIndex, elemArr);
}

previousImageButton.addEventListener("click", () => {
  const changedIndex = imageSlideHandler(-1);
  INDEX = changedIndex;
  updateImage(changedIndex, null, thumbnailsImageButtons);
});
nextImageButton.addEventListener("click", () => {
  const changedIndex = imageSlideHandler(1);
  INDEX = changedIndex;
  updateImage(changedIndex, null, thumbnailsImageButtons);
});

// Handle Product Quantity
const quantityMinusButton = document.querySelector(
  "[data-quantity-minus-button]"
);
const quantityPlusButton = document.querySelector(
  "[data-quantity-plus-button]"
);
const quantityText = document.querySelector("[data-quantity-text]");
let quantity = 0;

function quantityHandler(value) {
  if (value === -1 && quantity == 0) return;
  quantity += value;

  quantityText.innerText = quantity;
}

quantityMinusButton.addEventListener("click", () => quantityHandler(-1));
quantityPlusButton.addEventListener("click", () => quantityHandler(1));

// handle the cart Items
let CART_ITEMS = [];

const cartCardBody = document.querySelector("[data-cart-body]");
const cartItemNumber = document.querySelector("[data-cart-item-number]");

function handleCartCardView() {
  cartCardBody.innerHTML = "";
  if (CART_ITEMS.length === 0) {
    cartItemNumber.style.display = "none";
    const emptyCartTextElement = document.createElement("p");

    emptyCartTextElement.innerText = "Your cart is empty.";

    cartCardBody.append(emptyCartTextElement);

    return;
  }

  CART_ITEMS.forEach((cart, index) => {
    const cartNumber = index;
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");

    const cartItemContentDiv = document.createElement("div");
    cartItemContentDiv.classList.add("cart-item-content");

    const cartItemPricesDiv = document.createElement("div");
    cartItemPricesDiv.classList.add("cart-item-prices");

    const productImage = document.createElement("img");
    productImage.classList.add("cart-item-image");
    productImage.src = cart.thumbnailImage;
    productImage.alt = cart.productName;

    const productNameElement = document.createElement("p");
    productNameElement.classList.add("cart-item-title");
    productNameElement.innerText = cart.productName;

    const productPriceElement = document.createElement("p");
    productPriceElement.classList.add("cart-item-price");
    productPriceElement.innerHTML = `$${cart.productPrice} &Cross; ${cart.quantity}`;

    const totalPriceElement = document.createElement("p");
    totalPriceElement.classList.add("cart-item-total-price");
    totalPriceElement.innerText = `$${cart.productPrice * cart.quantity}`;

    const deleteButtonElement = document.createElement("button");
    deleteButtonElement.classList.add("cart-item-delete-button");
    deleteButtonElement.innerHTML = `<svg
    width="14"
    height="16"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <path
        d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
        id="a"
      />
    </defs>
    <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
  </svg>`;

    cartItemPricesDiv.append(productPriceElement);
    cartItemPricesDiv.append(totalPriceElement);

    cartItemContentDiv.append(productNameElement);
    cartItemContentDiv.append(cartItemPricesDiv);

    cartItemDiv.append(productImage);
    cartItemDiv.append(cartItemContentDiv);
    cartItemDiv.append(deleteButtonElement);

    cartCardBody.append(cartItemDiv);

    // listen the delete event

    deleteButtonElement.addEventListener("click", handleCartItemDelete);

    function handleCartItemDelete() {
      CART_ITEMS = CART_ITEMS.filter((_, index) => index !== cartNumber);

      handleCartCardView();
      displayNotification("Cart Item Removed");
      deleteButtonElement.removeEventListener("click", handleCartItemDelete);
    }
  });

  cartItemNumber.innerText = CART_ITEMS.length;
  cartItemNumber.style.display = "flex";

  const checkOutButton = document.createElement("button");
  checkOutButton.classList.add("cart-checkout");
  checkOutButton.innerText = "Checkout";

  cartCardBody.append(checkOutButton);
}

handleCartCardView();

// handle cart
const cart = document.querySelector("[data-cart]");
const cartButton = document.querySelector("[data-cart-button]");

cartButton.addEventListener("click", handleCartCardOpen);

function handleCartCardOpen() {
  cart.classList.toggle("visible");
}

const addToCartButton = document.querySelector("[data-add-to-cart-button]");

addToCartButton.addEventListener("click", () => {
  if (quantity === 0) return displayNotification("Set the quantity first.");

  CART_ITEMS = [
    ...CART_ITEMS,
    {
      productName: "Fall Limited Edition Sneakers",
      productPrice: 125.0,
      quantity,
      thumbnailImage: "../images/image-product-1-thumbnail.jpg",
    },
  ];
  handleCartCardView();

  displayNotification("Product Added");
});

// handle  the display of toast notification
const toastNotification = document.querySelector("[data-toast-notification]");
function displayNotification(message) {
  toastNotification.innerText = message;
  toastNotification.classList.add("visible");
  const time = setTimeout(() => {
    toastNotification.classList.remove("visible");
    toastNotification.innerText = "";

    clearTimeout(time);
  }, 1500);
}

// handle open nav bar in mobile
const hamburger = document.querySelector("[data-hamburger]");
const navBar = document.querySelector("[data-nav]");
const closeNavButton = document.querySelector("[data-mobile-cross-button]");

hamburger.addEventListener("click", handleNavOpen);
closeNavButton.addEventListener("click", handleNavOpen);

function handleNavOpen() {
  navBar.classList.toggle("visible");
}

// handle thumbnails
const thumbnailContainer = document.querySelector("[data-thumbnail-wrapper]");

const thumbnailsImageButtons = product_images.map((product) =>
  displayThumbnails(product)
);

function displayThumbnails(product) {
  const button = document.createElement("button");
  const thumbnailImage = document.createElement("img");

  button.classList.add("thumbnail-image-button");
  button.setAttribute("aria-label", "product image thumbnail button");
  thumbnailImage.classList.add("thumbnail-image");
  thumbnailImage.src = product.thumbnail;
  thumbnailImage.alt = "product image thumbnail";

  button.append(thumbnailImage);

  return button;
}

thumbnailsImageButtons.forEach((thumbnailButton, index, elemArr) => {
  thumbnailContainer.append(thumbnailButton);

  thumbnailButton.addEventListener("click", () => {
    INDEX = index;
    updateImage(index, null, elemArr);
    return;
  });

  if (index !== 0) return;

  thumbnailButton.classList.add("active");
});

function updateThumbnailImageActive(activeIndex, thumbElemArray) {
  thumbElemArray?.forEach((thumbnailButton, thumbnailIndex) => {
    thumbnailButton.classList.remove("active");
    if (thumbnailIndex !== activeIndex) return;

    thumbnailButton.classList.add("active");
  });
}

// open lightbox
const productImageButton = document.querySelector(
  "[data-product-image-button]"
);
const lightBoxContainer = document.querySelector("[data-lightbox]");

const lightBoxProductImage = document.querySelector(
  "[data-lightbox-product-image]"
);

productImageButton.addEventListener("click", lightBoxHandler);

const lightBoxThumbnailContainer = document.querySelector(
  "[data-lightbox-thumbnail-wrapper]"
);
const lightBoxThumbnailButtons = product_images.map((product) =>
  displayThumbnails(product)
);

lightBoxThumbnailButtons.forEach((lightBoxThumbnailButton, index, elemArr) => {
  lightBoxThumbnailContainer.append(lightBoxThumbnailButton);

  lightBoxThumbnailButton.addEventListener("click", (e) => {
    LIGHTBOX_INDEX = index;
    updateImage(index, lightBoxProductImage, elemArr);
    return;
  });

  if (index !== 0) return;

  lightBoxThumbnailButton.classList.add("active");
});

productImageButton.addEventListener("click", lightBoxHandler);

const lightBoxNextImageButton = document.querySelector(
  "[data-lightbox-next-image-button]"
);
const lightBoxPreviousImageButton = document.querySelector(
  "[data-lightbox-previous-image-button]"
);

lightBoxPreviousImageButton.addEventListener("click", () => {
  const changedIndex = imageSlideHandler(-1, LIGHTBOX_INDEX);
  LIGHTBOX_INDEX = changedIndex;
  updateImage(LIGHTBOX_INDEX, lightBoxProductImage, lightBoxThumbnailButtons);
});
lightBoxNextImageButton.addEventListener("click", () => {
  const changedIndex = imageSlideHandler(1, LIGHTBOX_INDEX);
  LIGHTBOX_INDEX = changedIndex;
  updateImage(LIGHTBOX_INDEX, lightBoxProductImage, lightBoxThumbnailButtons);
});

const lightBoxCloseButton = document.querySelector("[data-lightbox-close]");

lightBoxCloseButton.addEventListener("click", lightBoxHandler);

function lightBoxHandler() {
  if (
    document.body.clientWidth <= 960 ||
    lightBoxContainer.classList.contains("active")
  ) {
    lightBoxContainer.classList.remove("active");
    return;
  }

  lightBoxContainer.classList.add("active");
  const currentImageIndex = Number(productImage.dataset.productImage);
  LIGHTBOX_INDEX = currentImageIndex;

  updateImage(
    currentImageIndex,
    lightBoxProductImage,
    lightBoxThumbnailButtons
  );
}
