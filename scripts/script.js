const selectbox = document.querySelector("#passwordLength");
const passwordDisplay = document.querySelector("#password");
const copyBtn = document.querySelector("#copyBtn");

// Create password length option for the selection menu
for (let x = 1; x <= 100; x++) {
  const option = document.createElement("option");
  option.setAttribute("value", x);
  option.innerText = `${x} tekens`;
  if (x === 20) {
    option.setAttribute("selected", true);
  }
  selectbox.appendChild(option);
}

// Generate a password when button is clicked
document.querySelector("#generateBtn").addEventListener("click", () => {
  passwordDisplay.value = createPassword(parseInt(selectbox.value));
});

// Copy password to clipboard when button is clicked and show tooltip when copied
copyBtn.addEventListener("click", () => {
  passwordDisplay.select();
  passwordDisplay.setSelectionRange(0, 999);
  navigator.clipboard.writeText(passwordDisplay.value);

  copyBtn.classList.add("copied");
  setTimeout(() => {
    copyBtn.classList.remove("copied");
  }, 800);
});

// Clear inputfield when button is clcked
document.querySelector("#resetBtn").addEventListener("click", () => {
  passwordDisplay.value = " ";
});
