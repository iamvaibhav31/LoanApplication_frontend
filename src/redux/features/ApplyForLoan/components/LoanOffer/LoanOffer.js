import React, { useState } from "react";
import JourneyFormLayout from "../FormLayout/FormLayout";
import LoanOfferCard from "../LoanOfferCard/LoanOfferCard";
import { useSelector, useDispatch } from "react-redux";
import { addInfo3 } from "../../ApplySlice";
import { useNavigate } from "react-router-dom";
const LoanOffer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    amount: "",
    interest: "",
  });

  const handleOnSelect = (amount, interest) => {
    setFormData({ amount, interest });
  };
  console.log("LoanOffer", formData);
  return (
    <JourneyFormLayout
      name={"Submit"}
      goBack={false}
      onPress={() => {
        dispatch(addInfo3(formData));
        navigate("/journey/agreement");
      }}
    >
      <LoanOfferCard
        amount={"10,000"}
        givenin={"7"}
        interest={"2"}
        onSelect={() => {
          handleOnSelect("10,000", "2");
        }}
      />
      <LoanOfferCard
        amount={"20,000"}
        givenin={"15"}
        interest={"2"}
        onSelect={() => {
          handleOnSelect("20,000", "2");
        }}
      />
    </JourneyFormLayout>
  );
};

export default LoanOffer;
