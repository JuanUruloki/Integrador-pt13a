import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            onClick={() => {
              onClose(id);
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
}
