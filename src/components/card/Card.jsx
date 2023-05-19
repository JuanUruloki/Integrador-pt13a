import styles from "./Card.module.css";

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
        <h2 className={styles.props}>Name: {name}</h2>
        <h2 className={styles.props}>Status: {status}</h2>
        <h2 className={styles.props}>Species:{species}</h2>
        <h2 className={styles.props}>Gender:{gender}</h2>
        <h2 className={styles.props}>Origin:{origin}</h2>
        <img className={styles.image} src={image} alt="" />
      </div>
    </div>
  );
}
