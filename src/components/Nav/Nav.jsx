import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { onSearch } from "../../App";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <SearchBar onSearch={onSearch} />;
    </div>
  );
};

export default Nav;
