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

  // const handleChange = (event) => {
  //   const property = event.target.name;
  //   const value = event.target.value;
  //   setUserData({ ...userData, [property]: value });
  //   validation({ ...userData, [property]: value }, errors, setErrors);
  //   console.log(errors);
  // };

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
    setErrors(validation({...userData, [property]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          {/* <label>Username</label> */}
          <input
            type="text"
            placeholder="Username..."
            name="email"
            value={userData.email}
            className={styles.inputs}
            onChange={handleChange}
          />
          <p>{`${errors.email ? errors.email : 'ingresa con email@gmail.com'}`}</p>
        </div>
        <div>
          {/* <label>Password</label> */}
          <input
            type="text"
            name="password"
            placeholder="Password..."
            value={userData.password}
            className={styles.inputs} 
            onChange={handleChange}
          />
          <p>{`${errors.password ? errors.password : 'ingresa con pass123'}`}</p>
        </div>
        <button className={styles.submit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
