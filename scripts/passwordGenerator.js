const capital = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const lower = "abcdefghlkjmnpqrstuvwxyz";
const digits = "123456789";
const specials = "~!@#$%^&*(){}[]<>?/|";

const pickAcharacter = (option) =>
  option[Math.floor(Math.random() * option.length)];

const createPassword = (length) => {
  let newPassword = "";
  for (let x = 0; x <= length - 1; x++) {
    const options = [capital, lower, digits, specials];
    const randomOption = Math.floor(Math.random() * options.length);
    const character = pickAcharacter(options[randomOption]);
    newPassword = newPassword + character;
  }
  return newPassword;
};
