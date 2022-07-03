const path = require("path");

const pathSeparator = path.sep; // this shows platform or computer type or OS path separator

const filePath = path.join("/content", "subFolder", "test.txt");

const base = path.basename(filePath);

const absolutePath = path.resolve(
  __dirname,
  "content",
  "subFolder",
  "test.txt"
);

console.log(pathSeparator);
console.log(filePath);
console.log(base);
console.log(absolutePath);
