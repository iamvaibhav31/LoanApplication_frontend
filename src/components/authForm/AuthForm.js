import React, { useState } from "react";
import styles from "./AuthForm.module.css";
import { Link } from "react-router-dom";
import AuthFormValidate from "../../Validators/AuthFormvalidator";
import useAuth from "../../hooks/useAuth";
const AuthForm = ({ action, name }) => {
  const { LoginUsers, RegisterUsers } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({});

  const handelOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = () => {
    setFormError(AuthFormValidate(formData));
    if (Object.keys(formError).length === 0) {
      if (action === "LOGIN") {
        LoginUsers(formData);
      }
      if (action === "REGISTER") {
        RegisterUsers(formData);
      }
    }
  };

  return (
    <form className={styles.container}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        defaultValue={formData.email}
        required
        className={styles.inputContainer}
        onChange={handelOnChange}
      />
      <input
        type="password"
        name="password"
        defaultValue={formData.password}
        placeholder="Password"
        required
        className={styles.inputContainer}
        onChange={handelOnChange}
      />

      <div>
        <button
          type="submit"
          className={styles.submitButton}
          onClick={handleOnSubmit}
        >
          {name}
        </button>
        {action === "REGISTER" && (
          <div className={styles.alreadyTxt}>
            Already have an account?{" "}
            <Link to={"/login"} className={styles.alreadyTxtSpan}>
              Log In
            </Link>
          </div>
        )}
        {action === "LOGIN" && (
          <div className={styles.alreadyTxt}>
            New to Embifi?{" "}
            <Link to={"/register"} className={styles.alreadyTxtSpan}>
              Create an account
            </Link>
          </div>
        )}
      </div>
    </form>
  );
};

export default AuthForm;
