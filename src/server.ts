import finalhandler from "finalhandler";
import http from "http";
import serveStatic from "serve-static";

const host = "localhost";
const port = 8080;

const serve = serveStatic(__dirname, {
  index: "index.html",
});

const server = http.createServer((req, res) => {
  console.log(`Path: ${req.url}`);

  serve(req, res, finalhandler(req, res) as () => void);
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
