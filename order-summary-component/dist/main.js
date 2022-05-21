const mainWrapper = document.querySelector(".main-wrapper");

// handle the mobile scroll issue
window.addEventListener("resize", () => {
  const windowHeight = `${Math.ceil(window.innerHeight) - 1}px`;

  mainWrapper.style.minHeight = windowHeight;
});

window.dispatchEvent(new Event("resize"));
