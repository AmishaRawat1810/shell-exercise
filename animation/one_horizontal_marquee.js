const SPACE = " ".repeat(20).split("").map((x) => x.repeat(20).split(""));
const displaySpace = (space) => space.map((x) => x.join("")).join("\n");
const clearSpace = (space) => space.forEach((row) => row.fill(" "));
const drawOnSpace = (space, x, y, char) => space[x][y] = char;

const animate = (args) => {
  const heading = String(args) || "text here".split("");
  let baseX = 0;
  let baseY = 0;
  setInterval(() => {
    console.clear();
    heading.map((char, i) => {
      const offsetY = (baseY + i) % SPACE[baseX].length;
      drawOnSpace(SPACE, baseX, offsetY, char);
    });
    console.log(displaySpace(SPACE));
    clearSpace(SPACE);
    baseY++;
  }, 1000);
};

animate(Deno.args);
