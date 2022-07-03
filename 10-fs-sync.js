// file module or file system
const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first);
// console.log(second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result of the write file sync method : ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with the task");
console.log("starting the next task");

// can we create helper methods to handle file creations for diff function types, directly from terminal as is in laravel?
