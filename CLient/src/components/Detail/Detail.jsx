import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/home");
  };

  return (
    <div>
      <p>Name: {character.name}</p>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin && character.origin.name}</p>
      <img src={character.image} alt="Character" />
      <button onClick={backToHome}>Volver</button>
    </div>
  );
};

export default Detail;
