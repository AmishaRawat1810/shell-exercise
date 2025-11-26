//cmd : grep -o "[0-9]\+,[^_]\+" obfuscated.txt | sort -n | cut -d',' -f2-
const data = Deno.readTextFileSync("./powers_of_grep.txt").split("\n").join("");
console.log(data);
