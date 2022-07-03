// file module or file system
const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result of the write file sync method : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting the next task");

// this shit contains a callback hell which is messed up and fucked...
