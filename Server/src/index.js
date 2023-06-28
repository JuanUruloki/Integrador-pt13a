const express = require("express");
const router = require("./routes/index");
const PORT = 3001;

// ? --------------- ANTES DE EXPRESS ---------------
/* const http = require("http");
const data = require("./utils/data");
const getCharById = require("./controllers/getCharById");

http
  .createServer((req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
  
    if (req.url.includes("/rickandmorty/character")) {
  const id = Number(req.url(split("/").at(-1)))
  const id = req.url.split("/").at(-1);
      const charId = data.find((char) => {
        return char.id === +id;
      getCharById(res, id);
    }
  })
      res
        .writeHead(200, { "Content-type": "application/json" })
        .end(JSON.stringify(charId));
    }
  })
   .listen(3001);*/

// *************** DESPUES DE EXPRESS ***************

const server = express();

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());
server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log(`Server raised in port:${PORT}`);
});
