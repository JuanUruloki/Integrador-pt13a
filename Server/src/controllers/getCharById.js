const axios = require("axios");

/*const URL = "https://rickandmortyapi.com/api/character";
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
}; */

const URL = "https://rickandmortyapi.com/api/character"

const getCharById = async (req, res)=> {
  try {
    const {id} = req.params;
    const response = await axios(`${URL}/${id}`)
   const {data} = response;
    const character = data
  return character.name ?
  res.status(200).json(character) : res.status(404).json({message: error}) 
  }catch (reason) {
      res.status(500).json({message: reason})
  }
}
    // const {id, status, name, species, origin, image, gender, error} = data
  

  // const getCharById = async (req, res)=> {
  //   const {id} = req.params;
  //       try {
  //     const {data} = await axios(`${URL}/${id}`);
  //     const {id, status, name, species, origin, image, gender, error} = data
            
  //   } catch (error) {
      
  //   }
  // }
  module.exports = getCharById;