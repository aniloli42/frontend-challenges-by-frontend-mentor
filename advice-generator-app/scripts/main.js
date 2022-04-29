const adviceNumber = document.querySelector("[date-advice-number]");
const adviceText = document.querySelector("[data-advice]");
const refreshButton = document.querySelector("[data-refresher]");

async function getAdvice() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");

    const {
      slip: { advice, id },
    } = await res.json();

    adviceNumber.innerText = id;
    adviceText.innerText = advice;
  } catch (error) {}
}

getAdvice();

refreshButton.addEventListener("click", getAdvice);
