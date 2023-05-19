import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";


const Nav = (props) => {
  return (
    <div className={styles.nav}>
      <SearchBar onSearch={props.onSearch} />;
    </div>
  );
};

export default Nav;
