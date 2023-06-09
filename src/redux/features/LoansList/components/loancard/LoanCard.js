import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loanDetails } from "../../services/loanServices";
const LoanCard = ({ id, name, phoneNo, businessType }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{name}</td>
      <td>{phoneNo}</td>
      <td>{businessType}</td>
      <td>
        <Link
          to={"/details"}
          onClick={() => {
            console.log("asd");
            dispatch(loanDetails(id));
          }}
        >
          Veiw
        </Link>
      </td>
    </tr>
  );
};

export default LoanCard;
