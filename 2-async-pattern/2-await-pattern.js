import fs from "fs";
const { readFile, writeFile } = fs.promises;

// THE BEST PROMISE APPROCH
const start = async () => {
  try {
    const first = await readFile("./content/first.txt");
    const second = await readFile("./content/second.txt");
    await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME: ${first}, ${second}, .`,
      { flag: "a" },
    );
    console.log(first + ", " + second);
  } catch (error) {
    console.log(error);
  }
};
start();

// USING UTIL PROMISIFY WITH ASYNC FUNCTION
/*
import util from "util";
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise("./content/first.txt");
    const second = await readFilePromise("./content/second.txt");
    await writeFilePromise(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME: ${first}, ${second}, .`,
    );
    console.log(first + ", " + second);
  } catch (error) {
    console.log(error);
  }
};
start();
*/

// USING PROMISE FUNCTION
/*
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

getText(`./content/first.txt`)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
*/
