import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = (props, logout) => {
  return (
    <div className={styles.nav}>
      <SearchBar onSearch={props.onSearch} />
      <Link to="/home">
        <button className={styles.buttons}>Home</button>
      </Link>
      ,
      <Link to="/about">
        <button className={styles.buttons}>About</button>
      </Link>
      ,
      <Link to="/favorites">
        <button className={styles.buttons}>Favorites</button>
      </Link>
      ,
      <Link to="/">
        <button className={styles.buttons} onClick={logout}>
          Logout
        </button>
      </Link>
      ,
    </div>
  );
};

export default Nav;
