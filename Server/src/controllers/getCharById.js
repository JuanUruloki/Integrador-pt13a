const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character";
const getCharById = (res, id) => {
  axios(`${URL}/${id}`)
    .then((res) => {
      const {
        id,
        name,
        gender,
        species,
        origin = origin.name,
        image,
        status,
      } = res.data;
      const character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      };
      res.writeHead(200, { "Content-Type": "aplication/json" });
      res.end(JSON.stringify({ character }));
    })
    .catch((error) => {
      res.writeHead(500, { "content-Type": "text/plain" });
      res.end(JSON.stringify(error.message));
    });
};

module.exports = {
  getCharById,
};
