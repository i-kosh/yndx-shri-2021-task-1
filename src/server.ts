import http, { RequestListener } from "http";
import fs from "fs";

const host = "localhost";
const port = 8080;

function getMime(url: string): string {
  switch (url.split(".")[1]) {
    case "html":
      return "text/html";

    case "js":
      return "application/javascript";

    case "css":
      return "text/css";

    case "ttf":
      return "application/octet-stream";

    default:
      return "text/plain";
  }
}

const requestListener: RequestListener = function (req, res) {
  const url = req.url.split("?")[0];
  const query = req.url.split("?")[1];
  console.log(`path: ${url}, query: ${query}`);

  switch (url) {
    case "/":
      fs.readFile(`${__dirname}/index.html`, function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-type": getMime(url) });
          res.end(JSON.stringify(err));
          return;
        }
        res.writeHead(200);
        res.end(data);
      });
      break;

    case "/server.js":
      res.writeHead(404);
      res.end();
      break;

    default:
      fs.readFile(__dirname + url, function (err, data) {
        if (err) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
          return;
        }
        res.writeHead(200, { "Content-type": getMime(url) });
        res.end(data);
      });
      break;
  }
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
