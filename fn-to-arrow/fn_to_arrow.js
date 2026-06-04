const regexToArrow = Deno.readTextFileSync("./filled_circle.js").replace(
  /\w+ (\w+) (\(.*\))/g,
  "const $1 = $2 => ",
);
// console.log(regexToArrow);

const regexGetLets = Deno.readTextFileSync("./prgm_with_let.js").replace(
  /^l.. (\w+) .*/ig,
  "$1",
);

const regexGetLets2 = Deno.readTextFileSync("./prgm_with_let.js").matchAll(
  /^l?.* \w+ = [^\(]/mg,
);
console.log([...regexGetLets2].flatMap((x) => x));
