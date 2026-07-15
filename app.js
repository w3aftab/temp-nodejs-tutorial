import { readFile } from "fs";

readFile("./content/first.txt", (err, data) => {
  if (err) throw err;
  console.log(data);
});
