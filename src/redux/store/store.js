import { configureStore } from "@reduxjs/toolkit";
import loansSlice from "./../features/LoansList/LoansSlice";
import ApplySlice from "../features/ApplyForLoan/ApplySlice";
const store = configureStore({
  reducer: {
    apply: ApplySlice,
    loan: loansSlice,
  },
});

export default store;
