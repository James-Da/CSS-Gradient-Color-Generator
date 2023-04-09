// Get references to HTML elements
const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textArea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");

// Generate a random color in hexadecimal format
const getRandomColor = () => {
  const randomHex = Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");
  return `#${randomHex}`;
};

// Generate and apply the gradient CSS style
const generateGradient = (isRandom) => {
  // If isRandom is true, generate two random colors
  if (isRandom) {
    colorInputs[0].value = getRandomColor();
    colorInputs[1].value = getRandomColor();
  }
  // Build the CSS gradient string
  const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
  // Apply the gradient to the gradientBox element
  gradientBox.style.background = gradient;
  // Update the code displayed in the textArea element
  textArea.value = `background: ${gradient};`;
};

// Copy the code in the textArea element to the clipboard
const copyCode = () => {
  navigator.clipboard.writeText(textArea.value);
  // Display "Code Copied!" on the copy button temporarily
  copyBtn.innerText = "Code Copied!";
  setTimeout(() => (copyBtn.innerText = "Copy Code"), 1600);
};

// Add event listeners to the color inputs, select menu, and buttons
colorInputs.forEach((input) => {
  input.addEventListener("input", () => generateGradient(false));
});

selectMenu.addEventListener("change", generateGradient);

refreshBtn.addEventListener("click", () => generateGradient(true));

copyBtn.addEventListener("click", copyCode);
