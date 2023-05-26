import styles from "./Form.module.css";
import { useState } from "react";
import validation from "../validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
    validation({ ...userData, [property]: value }, errors, setErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Email..."
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <p>{errors.email}</p>
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            name="password"
            placeholder="Password..."
            value={userData.password}
            onChange={handleChange}
          />
          <p>{errors.password}</p>
        </div>
        <button className={styles.submit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
