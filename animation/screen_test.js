const createScreen = (height, width) => ({
  height,
  width,
  pixels: Array.from(
    { length: height },
    (_) => Array.from({ length: width }, (_) => "_"),
  ),
});

const displayGrid = ({ pixels }) =>
  console.log(pixels.map((x) => x.join("")).join("\n"));

const clearGrid = ({ pixels }) => pixels.forEach((row) => row.fill(" "));

const wrapChar = (grid, x, y, character) =>
  grid.pixels[y % grid.height][x % grid.width] = character;

const putCharAt = (grid, x, y, character) => {
  if (x < 0 || x >= grid.width) {
    return;
  }
  if (y < 0 || y >= grid.height) {
    return;
  }
  grid.pixels[y][x] = character;
};

const putTextAt = (grid, x, y, text) => {
  for (let index = 0; index < text.length; index++) {
    wrapChar(grid, x + index, y, text[index]);
  }
};

const updateGrid = (grid, text, x, y) => {
  console.clear();
  putTextAt(grid, x, y, text);
};

const animate = (grid, heading, x, y) => {
  displayGrid(grid);
  setInterval(() => {
    updateGrid(grid, heading, x++, y);
    displayGrid(grid);
    clearGrid(grid);
  }, 1000);
};

const main = () => {
  const grid = createScreen(10, 10);
  const text = "hello";
  animate(grid, text, 0, 0);
};

main();
