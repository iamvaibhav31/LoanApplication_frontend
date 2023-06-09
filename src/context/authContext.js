import { createContext } from "react";

const value = {
  RegisterUsers: (data) => {},
  LoginUsers: (data) => {},
  userdata: {},
  loading: false,
  error: "",
};

const Context = createContext(value);
export default Context;
