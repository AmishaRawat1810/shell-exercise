const HEADER = " ".repeat(100).split("");
const drawOnScreen = (screen, x, char) => screen[x] = char;
const showScreen = (screen) => screen.join("");
const clearScreen = (screen) => screen.fill(" ").join("");
let x = 0;

const animate = (text) => {
  setInterval(() => {
    x = x + 1;
    console.clear();
    drawOnScreen(HEADER, x, text);
    console.log(showScreen(HEADER));
    clearScreen(HEADER);
  }, 300);
};

animate("DVD");
