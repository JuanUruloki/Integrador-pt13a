import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../Redux/actions";
import { useState, useEffect } from "react";



function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  // const closeFav = () => {
  //   setIsFav(false);
  //   removeFav(id)
  // };

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    }
    if (!isFav) {
      setIsFav(true);
      addFav({
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
        onClose,
        addFav,
        removeFav,
      });
    }
  };

    useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

    return (
      <div className={styles.container}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        <div className={styles.div}>
          <div className={styles.buttonContainer}>
            <button
              className={styles.button}
              onClick={() => {
                onClose(id);
                setIsFav(false);
                removeFav(id);
                // closeFav(id);

              }}
            >
              X
            </button>
          </div>
          <Link to={`/detail/${id}`}>
            <h2 className={styles.props}>Name: {name}</h2>
          </Link>
          <h2 className={styles.props}>Status: {status}</h2>
          <h2 className={styles.props}>Species:{species}</h2>
          <h2 className={styles.props}>Gender:{gender}</h2>
          <h2 className={styles.props}>Origin:{origin}</h2>
          <img className={styles.image} src={image} alt="" />
        </div>
      </div>
    );
  };


const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
