import React, { useState } from "react";
import {
  JourneyInputGroup,
  JourneyInputs,
  JourneySelector,
} from "../FormElements/FormElements";
import JourneyFormLayout from "../FormLayout/FormLayout";
import { useSelector, useDispatch } from "react-redux";
import { addInfo1, getInfo1 } from "../../ApplySlice";
import { useNavigate } from "react-router-dom";
const BasicInfo1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Info1Data = useSelector(getInfo1);
  const [formData, setFormData] = useState({
    fullname: "",
    phoneNo: "",
    email: "",
    dob: "",
    businessType: "",
  });

  const handelOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log("BasicInfo1", Info1Data, formData);
  return (
    <JourneyFormLayout
      name={"Proceed"}
      onPress={() => {
        dispatch(addInfo1(formData));
        navigate("/journey/Info");
      }}
      goBack={false}
    >
      <JourneyInputs
        label={"Full Name ( As per PAN)*"}
        placeholder={"As Per PAN"}
        type={"text"}
        Value={Info1Data.fullname}
        name={"fullname"}
        onChange={handelOnChange}
      />

      <JourneyInputGroup>
        <JourneyInputs
          label={"Mobile Number *"}
          placeholder={"Enter your Mobile Number"}
          type={"number"}
          Value={Info1Data.phoneNo}
          name={"phoneNo"}
          onChange={handelOnChange}
        />
        <JourneyInputs
          label={"Email ID "}
          placeholder={"Enter your Email ID"}
          type={"email"}
          Value={Info1Data.email}
          name={"email"}
          onChange={handelOnChange}
        />
      </JourneyInputGroup>
      <JourneyInputGroup>
        <JourneyInputs
          label={"DOB *"}
          type={"date"}
          Value={Info1Data.dob}
          name={"dob"}
          onChange={handelOnChange}
        />
      </JourneyInputGroup>
      <JourneySelector
        label={"Business Type *"}
        name={"businessType"}
        options={[
          "Proprietorship",
          "Partnership",
          "Limited Liability Partnership (LLP)",
          "Private Limited (Pvt Ltd)",
        ]}
        Value={"Limited Liability Partnership (LLP)"}
        onChange={handelOnChange}
      />
    </JourneyFormLayout>
  );
};

export default BasicInfo1;
