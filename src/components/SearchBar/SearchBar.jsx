import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <div className={styles.div}>
      <input className={styles.input} type="search" />
      <button
        className={styles.addButton}
        onClick={(id) => {
          onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
}
