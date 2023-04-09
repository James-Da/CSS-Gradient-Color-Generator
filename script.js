const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textArea = document.querySelector("textarea");

const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");

// const getRandomColor = () => {
//   // Generating a random color in hexadecimal format, example: #050b42
//   const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
//   return `#${randomHex}`;
// };

const getRandomColor = () => {
  // Generating a random color in hexadecimal format, example: #050b42
  const randomHex = Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");
  return `#${randomHex}`;
};

const generateGradient = (isRandom) => {
  if (isRandom) {
    colorInputs[0].value = getRandomColor();
    colorInputs[1].value = getRandomColor();
  }
  const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value}`;
  gradientBox.style.background = gradient;
  textArea.value = `background: ${gradient};`;
};

const copyCode = () => {
  navigator.clipboard.writeText(textArea.value);
  copyBtn.innerText = "Code Copied!";

  setTimeout(() => (copyBtn.innerText = "Copy Code"), 1600);
};

colorInputs.forEach((input) => {
  input.addEventListener("input", () => generateGradient(false));
});

selectMenu.addEventListener("change", generateGradient);
refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);
