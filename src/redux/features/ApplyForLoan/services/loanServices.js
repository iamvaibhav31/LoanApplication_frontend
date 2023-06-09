import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../../lib/axios/axios";

export const applyLoan = createAsyncThunk("Loan/apply", async (data) => {
  try {
    console.log("applyLoan", data);
    const response = await Axios.post("/loans/apply", data);
    console.log("applyLoan", response);
    return response.data;
  } catch (e) {
    return e.message;
  }
});
