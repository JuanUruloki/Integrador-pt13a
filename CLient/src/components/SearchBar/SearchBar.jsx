import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(id);
      setId("");
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="search"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={id}
        placeholder="Intruduzca ID"
      />
      <button
        className={styles.addButton}
        onClick={() => {
          onSearch(id);
          setId("");
        }}
      >
        Agregar
      </button>
    </div>
  );
}
