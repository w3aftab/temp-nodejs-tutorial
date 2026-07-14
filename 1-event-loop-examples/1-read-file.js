import { readFile } from "fs";

console.log("started a first task");

readFile("./content/first.txt", (err, result) => {
  if (err) throw err;
  console.log(result);
  console.log("comple first task");
});
console.log("starting next task");
