const http = require("http");
const data = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").at(-1);
      const charId = data.find((char) => {
        return char.id === +id;
      });
      res
        .writeHead(200, { "Content-type": "application/json" })
        .end(JSON.stringify(charId));
    }
  })
  .listen(3001);
