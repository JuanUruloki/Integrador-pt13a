import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router-dom";


const Nav = (props) => {
  return (
    <Link to="/about">
      <button>About</button>
    </Link>,
    <Link to="/home">
      <button>Home</button>
    </Link>,
    <div className={styles.nav}>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
};

export default Nav;
