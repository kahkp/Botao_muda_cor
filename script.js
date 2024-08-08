let isGrey = false;

let redButton = document.getElementById("dez");

redButton.addEventListener("click", () => {
  if (isGrey) {
    redButton.style.backgroundColor = "#ff0000";
  } else {
    redButton.style.backgroundColor = "#d2d2d2";
  }
  isGrey = !isGrey;
});
