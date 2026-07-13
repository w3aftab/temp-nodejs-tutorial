import { readFile, writeFile } from "fs";

writeFile(
  "../personal/index.html",
  `<!DOCTYPE html>
  <html lang="en-US">
  <body>
  <h1>New HTML File</h2>
  <p>This file  is created by node.js</p>
  </body>
  </html>`,
  (err, result) => {
    if (err) throw err;
    result = "New file is created";
    console.log(result);
  },
);
