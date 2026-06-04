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
      const length = heading.axis === "x" ? screen[0].length : screen.length;

      for (let i = 0; i < heading.text.length; i++) {
        const charIndex = heading.offset < 0 ? heading.text.length - 1 - i : i;
        // const coord = heading.pos + i * heading.offset;
        // const safeCoord = ((coord % length) + length) % length;
        const [y, x] = heading.axis === "y"
          ? [safeCoord, heading.coord]
          : [heading.coord, safeCoord];
        drawOnSpace(screen, x, y, heading.text[charIndex]);
      }
    });

    console.log(displaySpace(screen));
    clearSpace(screen);
    // headings.forEach((heading) => {
    //   const length = heading.axis === "x" ? screen[0].length : screen.length;
    //   heading.pos = (heading.pos + heading.offset) % length;
    // });
  }, 1000);
};

animate(Deno.args);
