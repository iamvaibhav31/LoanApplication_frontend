import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../../lib/axios/axios";

export const AllLoans = createAsyncThunk("Loan/List", async () => {
  try {
    //     console.log("AllLoans", data);
    const response = await Axios.get("/loans");
    console.log("AllLoans", response.data.data);
    return response.data.data;
  } catch (e) {
    return e.message;
  }
});

export const loanDetails = createAsyncThunk("Loan/Details", async (data) => {
  try {
    //     console.log("AllLoans", data);
    const response = await Axios.get(`/loans/${data}`);
    console.log("AllLoans", response.data.data);
    return response.data.data;
  } catch (e) {
    return e.message;
  }
});
