import Context from "../context/authContext";
import React, { useState } from "react";
import { Axios } from "../lib/axios/axios";
import { setCookie } from "nookies";
const Provider = ({ children }) => {
  const [userdata, setUserData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const LoginUsers = async (data) => {
    setLoading(true);
    await Axios.post("/login", data)
      .then((res) => {
        setCookie(null, "authToken", res.token, {
          maxAge: 90 * 24 * 60 * 60, // 90 days in seconds
          path: "/",
        });

        setError(undefined);
      })
      .catch((err) => {
        setLoading(false);
        setUserData(undefined);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const RegisterUsers = async (data) => {
    setLoading(true);
    await Axios.post("/register", data)
      .then((res) => {
        setError(undefined);
      })
      .catch((err) => {
        setLoading(false);
        setUserData(undefined);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const value = {
    RegisterUsers,
    LoginUsers,
    userdata,
    loading,
    error,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
