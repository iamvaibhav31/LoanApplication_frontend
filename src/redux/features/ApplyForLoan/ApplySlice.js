import { createSlice } from "@reduxjs/toolkit";
import { applyLoan } from "./services/loanServices";
const initialState = {
  fullname: "",
  phoneNo: "",
  email: "",
  dob: "",
  age: 0,
  businessType: "",
  businessDoc: "",
  adharaNo: "",
  adharaCard: {
    fileName: "", // Extracted file name
    fileSize: 0, // Extracted file size
    fileType: "", // Extracted file type
  },
  businessSitePhoto: {
    fileName: "", // Extracted file name
    fileSize: 0, // Extracted file size
    fileType: "", // Extracted file type
  },
  businessArea: "",
  pincode: "",
  city: "",
  state: "",
  loanAmount: 0,
  loanInterestPerMonth: 0,
  status: "idle", // idle | loading | successful | failed
  error: null,
};

const ApplySlice = createSlice({
  name: "Apply",
  initialState,
  reducers: {
    addInfo1: (state, action) => {
      const dob = new Date(action.payload.dob);
      const today = new Date();
      const diffTime = Math.abs(today - dob);
      state.fullname = action.payload.fullname;
      state.phoneNo = action.payload.phoneNo;
      state.email = action.payload.email;
      state.dob = action.payload.dob;
      state.age = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
      state.businessType = action.payload.businessType;
    },
    addInfo2: (state, action) => {
      state.adharaNo = action.payload.adharaNo;
      state.businessDoc = action.payload.businessDoc;
      state.adharaCard = action.payload.adharaCard;
      state.businessSitePhoto = action.payload.businessSitePhoto;
      state.businessArea = action.payload.businessArea;
      state.pincode = action.payload.pincode;
      state.city = action.payload.city;
      state.state = action.payload.state;
    },
    addInfo3: (state, action) => {
      state.loanAmount = action.payload.amount;
      state.loanInterestPerMonth = action.payload.interest;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(applyLoan.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(applyLoan.fulfilled, (state, action) => {
        state.status = "successful";
        console.log(action.payload);
      })
      .addCase(applyLoan.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addInfo1, addInfo2, addInfo3 } = ApplySlice.actions;

export const getInfo1 = (state) => ({
  fullname: state.apply.fullname,
  phoneNo: state.apply.phoneNo,
  email: state.apply.email,
  dob: state.apply.dob,
  businessType: state.apply.businessType,
});

export const getInfo2 = (state) => ({
  businessDoc: state.apply.businessDoc,
  adharaNo: state.apply.adharaNo,
  adharaCard: state.apply.adharaCard,
  businessSitePhoto: state.apply.businessSitePhoto,
  businessArea: state.apply.businessArea,
  pincode: state.apply.pincode,
  city: state.apply.city,
  state: state.apply.state,
});

export const getInfo3 = (state) => ({
  loanAmount: state.apply.loanAmount,
  loanInterestPerMonth: state.apply.loanInterestPerMonth,
});

export const getAge = (state) => state.apply.age;
export const getBusinessType = (state) => state.apply.businessType;

export default ApplySlice.reducer;
