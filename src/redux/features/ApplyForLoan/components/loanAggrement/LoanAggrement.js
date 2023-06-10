import React from "react";
import JourneyFormLayout from "../FormLayout/FormLayout";
import styles from "./LoanAggrement.module.css";
import { LoanAggreementillus } from "../../../../../components/SVGIcons/index";
import { useSelector, useDispatch } from "react-redux";
import {
  getAge,
  getBusinessType,
  getInfo3,
  getInfo1,
  getInfo2,
} from "../../ApplySlice";
import { applyLoan } from "../../services/loanServices";
import { useNavigate } from "react-router-dom";
const LoanAggrement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Info1Data = useSelector(getInfo1);
  const Info2Data = useSelector(getInfo2);
  const Info3Data = useSelector(getInfo3);
  const Age = useSelector(getAge);
  const BusinessType = useSelector(getBusinessType);

  return (
    <JourneyFormLayout
      name={"Accept"}
      goBack={false}
      onPress={() => {
        if (Age !== 23 && BusinessType !== "partnership") {
          dispatch(
            applyLoan({
              fullName: Info1Data.fullname,
              mobileNumber: Info1Data.phoneNo,
              email: Info1Data.email,
              dob: Info1Data.dob,
              businessType: Info1Data.businessType,
              businessDocument: Info2Data.businessDoc,
              adhaarCardNumber: Info2Data.adharaNo,
              adhaarCardPhoto: Info2Data.adharaCard,
              businessSitePhoto: Info2Data.businessSitePhoto,
              businessAddress: {
                buildingName: Info2Data.businessArea,
                pincode: Info2Data.pincode,
                city: Info2Data.city,
                state: Info2Data.state,
              },
              loanAmount: Info3Data.loanAmount,
              loanInterestPerMonth: Info3Data.loanInterestPerMonth,
            }),
          );
             navigate("/journey/approved");
        } else {
          navigate("/journey/rejected");
        }
      }}
    >
      <div className={styles.title}>Loan Agreement</div>

      <div className={styles.detailsCon}>
        <div className={styles.detailsSubCon}>
          <div>Loan Summary</div>
          <div className={styles.detailsIllus}>
            <LoanAggreementillus />
          </div>
        </div>
        <div className={styles.detailsSubCon}>
          <div className={styles.detailsKey}>Loan Amount</div>
          <div className={styles.detailsValue}> ₹ {Info3Data.loanAmount}</div>
        </div>
        <div className={styles.detailsSubCon}>
          <div className={styles.detailsKey}>Interest Rate</div>
          <div className={styles.detailsValue}>
            {Info3Data.loanInterestPerMonth}%
          </div>
        </div>
        <div className={styles.detailsSubCon}>
          <div className={styles.detailsKey}>Processing Charges</div>
          <div className={styles.detailsValue}> ₹25</div>
        </div>
        <div className={styles.detailsSubCon}>
          <div className={styles.detailsKey}>Disbursal Amount</div>
          <div className={styles.detailsValue}> ₹ 10,025</div>
        </div>
        <div className={styles.detailsSubCon}>
          <div className={styles.detailsKey}>Total Payback Amount</div>
          <div className={styles.detailsValue}> ₹ 10,025</div>
        </div>
      </div>
    </JourneyFormLayout>
  );
};

export default LoanAggrement;

// If the user's age is 23 and the business type is partnership, redirect the user to an "application-rejected" status screen.
// Otherwise, show the "application-accepted" status screen.
