import { createReadStream } from "fs";

const streem = createReadStream("./content/big.txt", {
  highWaterMark: 100000,
  encoding: "utf8",
});

streem.on("data", (result) => {
  console.log(result);
});

streem.on("error", (error) => {
  console.log(err);
});
