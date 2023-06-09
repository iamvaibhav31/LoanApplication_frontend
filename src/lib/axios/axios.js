import axios from "axios";

const baseURL = "http://localhost:4000";
let authToken = localStorage.getItem("authTokens")
  ? localStorage.getItem("authTokens")
  : null;

const Axios = axios.create({
  baseURL: baseURL, // if we use .env file in react js the name convection is REACT_APP_<nameyouwant>
});

const AxioswithToken = axios.create({
  baseURL: baseURL, // if we use .env file in react js the name convection is REACT_APP_<nameyouwant>
  headers: { Authorization: "Bearer " + authToken },
});

export { Axios, AxioswithToken };
