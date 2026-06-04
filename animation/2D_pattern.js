const HEADER = [
  " ".repeat(6).split(""),
  " ".repeat(6).split(""),
  " ".repeat(6).split(""),
  " ".repeat(6).split(""),
  " ".repeat(6).split(""),
  " ".repeat(6).split(""),
  " ".repeat(6).split(""),
  " ".repeat(6).split(""),
  " ".repeat(6).split(""),
  " ".repeat(6).split(""),
  " ".repeat(6).split(""),
  " ".repeat(6).split(""),
];

const drawOnScreen = (screen, x, y, char) => screen[x][y] = char;
const clearScreen = (screen) => {
  for (const i in screen) {
    for (const j in screen) {
      screen[i][j] = " ";
    }
  }
};
const showScreen = (screen) => screen.map((row) => row.join("")).join("\n");

let x = 0;
let y = 0;

const animate = (text) => {
  setInterval(() => {
    x = (x + 1) % 6;
    y = (y + 1) % 6;
    console.clear();
    drawOnScreen(HEADER, x, y, text);
    console.log(showScreen(HEADER));
    clearScreen(HEADER);
  }, 300);
};

animate("*");
