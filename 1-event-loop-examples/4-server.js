import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else {
    res.end("Error Page");
  }
  res.end();
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
