import axios from "axios";
import { FILTER, ORDER } from "./action-types";

/*export const addFav = (character) => {
  return { type: ADD_FAV, payload: character };
}; */
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, character);
      const { data } = response;
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    } catch (error) {
      console.error("Error al añadir favorito", error.message);
    }
  };
};
/*export const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
}; */

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const response = await axios.delete(endpoint);
      const { data } = response;
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    } catch (error) {
      console.error("Error al eliminar favorito", error.message);
    }
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
