import http from "http";

const server = http.createServer();

server.on("request", (res, req) => {
  res.end("welcome");
});
server.listen(5000);
