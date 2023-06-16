import { useSelector } from "react-redux";
import Card from "../card/Card";
import { filterCards, orderCards } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import styles from "./Favorites.module.css"

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const [aux, setAux] = useState(false);
 
  const handleOrder = (event) => {
    setAux(!aux)
    dispatch(orderCards(event.target.value))
  }

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }

  return (
    <div>
      
      <select onChange={handleOrder} className={styles.select}>
        <option value="A" >Ascendente</option>
        <option value="D" >Descendente</option>
      </select>

      <select onChange={handleFilter} className={styles.select}>
        <option value="All">All</option>
        <option value="Male" >Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <div className={styles.favContainer}>
      {favorites.map(({id, name, status, species, gender, origin, image, onClose}) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={onClose}
          />
        );
      })}
      </div>
    </div>
  );
};

export default Favorites;
