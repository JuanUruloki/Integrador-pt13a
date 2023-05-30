// function validation(userData, errors, setErrors) {
//   const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
//   const regexPass = /\d/;
//   if (userData.email.length === 0)
//     setErrors({ ...errors, email: "Se requiere un nombre de usuario" });
//   if (userData.email.length > 35)
//     setErrors({ ...errors, email: "No puede superar los 35 caracteres" });
//   if (!regexEmail.test(userData.email)) {
//     setErrors({ ...errors, email: "Email inválido" });
//   } else {
//     setErrors({ ...errors, email: "" });
//   }
//   if (userData.password.length < 6 || userData.password.length > 10)
//     setErrors({
//       ...errors,
//       password: "Password debe tener entre 6 y 10 caracteres",
//     });
//   else if (!regexPass.test(userData.password))
//     setErrors({
//       ...errors,
//       password: "Password debe contener al menos un numero",
//     });
//   else {
//     setErrors({ ...errors, password: "" });
//   }
// }

const validation = ({ email, password }) => {
  let errors = {};
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
  const regexPass = /\d/;
  if (email.length === 0) errors.email = "Se requiere un nombre de usuario";
  if (email.length > 35) errors.email = "No puede superar los 35 caracteres";
  if (!regexEmail.test(email)) {
    errors.email = "Email inválido";
  }
  if (password.length < 6 || password.length > 10)
    errors.password = "Password debe tener entre 6 y 10 caracteres";
  else if (!regexPass.test(password))
    errors.password = "Password debe contener al menos un numero";
  return errors;
};
export default validation;
