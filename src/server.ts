import http, { RequestListener } from "http";
import fs from "fs";

const host = "localhost";
const port = 8080;

const requestListener: RequestListener = function (req, res) {
  console.log(`Request: ${req.url}`);

  switch (req.url) {
    case "/":
      fs.readFile(`${__dirname}/index.html`, function (err, data) {
        if (err) {
          res.writeHead(404);
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
      fs.readFile(__dirname + req.url, function (err, data) {
        if (err) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
          return;
        }
        res.writeHead(200);
        res.end(data);
      });
      break;
  }
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
