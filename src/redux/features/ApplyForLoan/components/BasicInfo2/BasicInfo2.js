import React, { useState } from "react";
import {
  JourneyInputGroup,
  JourneyInputs,
  JourneySelector,
  JourneyUploader,
} from "../FormElements/FormElements";
import JourneyFormLayout from "../FormLayout/FormLayout";
import { useSelector, useDispatch } from "react-redux";
import { addInfo2, getInfo2 } from "../../ApplySlice";
import { useNavigate } from "react-router-dom";
const BasicInfo2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Info2Data = useSelector(getInfo2);
  const [formData, setFormData] = useState({
    businessDoc: "",
    adharaNo: "",
    adharaCard: {},
    businessSitePhoto: {},
    businessArea: "",
    pincode: "",
    city: "",
    state: "",
  });
  const handelOnChange = (e) => {
    const name = e.target.name;
    if (name === "adharaCard" || name === "businessSitePhoto") {
      const file = e.target.files[0];
      const fileInfo = {
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
      };
      setFormData({
        ...formData,
        [name]: fileInfo,
      });
    } else {
      setFormData({
        ...formData,
        [name]: e.target.value,
      });
    }
  };

  console.log("BasicInfo2", Info2Data, formData);
  return (
    <JourneyFormLayout
      name={"Proceed"}
      onPress={() => {
        dispatch(addInfo2(formData));
        navigate("/journey/offer");
      }}
      goBack={true}
      onPressGoBack={() => {
        navigate("/journey");
      }}
    >
      <JourneySelector
        label={"Business Document *"}
        name={"businessDoc"}
        options={["Udyog AADHAR"]}
        Value={"Udyog AADHAR"}
        onChange={handelOnChange}
      />

      <JourneyInputs
        label={"Udhyog AADHAR Number *"}
        placeholder={"Enter your Udyog AADHAR Number "}
        type={"text"}
        Value={Info2Data.adharaNo}
        name={"adharaNo"}
        onChange={handelOnChange}
      />

      <JourneyUploader
        label={"Udyog AADHAR  *"}
        name={"adharaCard"}
        onChange={handelOnChange}
      />
      <JourneyUploader
        label={"Business Site Photo *"}
        name={"businessSitePhoto"}
        onChange={handelOnChange}
      />
      <JourneyInputs
        label={"Building Number & Area *"}
        placeholder={"Enter your Mobile Number"}
        type={"text"}
        Value={Info2Data.businessArea}
        name={"businessArea"}
        onChange={handelOnChange}
      />
      <JourneyInputGroup>
        <JourneyInputs
          label={"Pincode *"}
          placeholder={"Pincode"}
          type={"number"}
          Value={Info2Data.pincode}
          name={"pincode"}
          onChange={handelOnChange}
        />
        <JourneyInputs
          label={"Town / City *"}
          placeholder={"Enter your Town /  City"}
          type={"text"}
          Value={Info2Data.city}
          name={"city"}
          onChange={handelOnChange}
        />
      </JourneyInputGroup>
      <JourneyInputGroup>
        <JourneyInputs
          label={"State *"}
          placeholder={"State"}
          type={"text"}
          Value={Info2Data.state}
          name={"state"}
          onChange={handelOnChange}
        />
      </JourneyInputGroup>
    </JourneyFormLayout>
  );
};

export default BasicInfo2;
