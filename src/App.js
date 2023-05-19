import { useState } from "react";
import styles from "./App.module.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/Nav/Nav";

function Characters() {
  const [characters, setCharacters] = useState([]);
}
const example = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
};

function onSearch() {
  setCharacters([...characters, example]);
}

function App() {
  return (
    <div className="App">
      <Nav />
      <Cards characters={characters} />
    </div>
  );
}

export default App;
export { onSearch };
