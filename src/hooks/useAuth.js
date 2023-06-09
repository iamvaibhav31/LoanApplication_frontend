import React, { useContext } from "react";
import Context from "../context/authContext";
const useAuth = () => {
  const { RegisterUsers, LoginUsers, userdata, loading, error } =
    useContext(Context);
  return {
    RegisterUsers,
    LoginUsers,
    userdata,
    loading,
    error,
  };
};

export default useAuth;
