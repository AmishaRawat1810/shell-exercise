const SPACE = " ".repeat(20).split("").map((x) => x.repeat(20).split(""));
const displaySpace = (space) => space.map((x) => x.join("")).join("\n");
const clearSpace = (space) => space.forEach((row) => row.fill(" "));
const drawOnSpace = (space, x, y, char) => space[y][x] = char;

const makeItAnObject = (text) =>
  text.map((text, i) => (
    { text, axis: "y", pos: [0, i * 2], direction: 1 }
  ));

const animate = (args) => {
  const headings = args.length
    ? makeItAnObject(args)
    : makeItAnObject(["kkk", "lll"]);

  setInterval(() => {
    console.clear();
    headings.forEach((str) => {
      for (let index = 0; index < str.text.length; index++) {
        const offsetX = (str.x + index * str.direction) % SPACE[str.y].length;
        const safeOffsetX = (offsetX + str.text.length) % SPACE[str.y].length;
        drawOnSpace(SPACE, str.y, safeOffsetX, str.text[index]);
      }
    });
    console.log(displaySpace(SPACE));
    clearSpace(SPACE);
    headings.forEach((heading) => {
      heading.x = (heading.x + heading.direction) % SPACE[heading.y].length;
    });
  }, 1000);
};

animate(Deno.args);
