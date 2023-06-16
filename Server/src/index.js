const http = require("http");
const data = require("./utils/data");
const getCharById = require("./controllers/getCharById");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url.includes("/rickandmorty/character")) {
      // const id = Number(req.url(split("/").at(-1)))
      // const id = req.url.split("/").at(-1);
      // const charId = data.find((char) => {
      //   return char.id === +id;
      getCharById(res, id);
    }
  })
  //     res
  //       .writeHead(200, { "Content-type": "application/json" })
  //       .end(JSON.stringify(charId));
  //   }
  // })
  .listen(3001);
