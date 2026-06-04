const SPACE = " ".repeat(20).split("").map((x) => x.repeat(20).split(""));
const displaySpace = (space) => space.map((x) => x.join("")).join("\n");
const clearSpace = (space) => space.forEach((row) => row.fill(" "));
const drawOnSpace = (space, x, y, char) => space[y][x] = char;

const makeItObject = (text) =>
  text.map((text, i) => (
    { text, axis: i % 2 === 0 ? "x" : "y", pos: i * 2, coord: i, offset: 1 }
  ));

const animate = (args) => {
  const headings = makeItObject(args);

  setInterval(() => {
    console.clear();
    headings.forEach((heading) => {
      const length = heading.axis === "x" ? SPACE[0].length : SPACE.length;

      for (let i = 0; i < heading.text.length; i++) {
        const charIndex = heading.offset < 0 ? heading.text.length - 1 - i : i;
        const coord = heading.pos + i * heading.offset;
        const safeCoord = ((coord % length) + length) % length;
        const [y, x] = heading.axis === "y"
          ? [safeCoord, heading.coord]
          : [heading.coord, safeCoord];
        drawOnSpace(SPACE, x, y, heading.text[charIndex]);
      }
    });

    console.log(displaySpace(SPACE));
    clearSpace(SPACE);
    headings.forEach((heading) => {
      const length = heading.axis === "x" ? SPACE[0].length : SPACE.length;
      heading.pos = (heading.pos + heading.offset) % length;
    });
  }, 1000);
};

animate(Deno.args);
