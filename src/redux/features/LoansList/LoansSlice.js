import { createSlice } from "@reduxjs/toolkit";
import { AllLoans, loanDetails } from "./services/loanServices";

const initialState = {
  loans: [],
  loanDetails: {
    name: "",
    businessType: "",
    loanAmount: 0,
    dob: "",
    phoneNo: "",
  },
  status: "idle", // idle | loading | successful | failed
  error: null,
};

const LoansSlice = createSlice({
  name: "Loans",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(AllLoans.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(AllLoans.fulfilled, (state, action) => {
        state.status = "successful";
        state.loans = action.payload;
        console.log(action.payload);
      })
      .addCase(AllLoans.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(loanDetails.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loanDetails.fulfilled, (state, action) => {
        state.status = "successful";
        state.loanDetails = action.payload;
      })
      .addCase(loanDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// export const {} = LoansSlice.actions;

export const getAllLoans = (state) => state.loan.loans;
export const getLoanDetails = (state) => state.loan.loanDetails;
export default LoansSlice.reducer;
