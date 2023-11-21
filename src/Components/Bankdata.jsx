import React from "react";
import { Link } from "react-router-dom";

function Bankdata({ bankdata }) {
  return (
    <tr>
      <td>
        <Link to={`/banksdata/${bankdata.id}`}> {bankdata.firstname}</Link>
      </td>
      <td>
        <Link to={`/banksdata/${bankdata.id}`}>{bankdata.middlename}</Link>
      </td>
      <td>
        <Link to={`/banksdata/${bankdata.id}`}>{bankdata.lastname}</Link>
      </td>
      <td>
        <Link to={`/banksdata/${bankdata.id}`}>{bankdata.dob}</Link>
      </td>
      <td>
        <Link to={`/banksdata/${bankdata.id}`}>{bankdata.email}</Link>
      </td>
      <td>
        <Link to={`/banksdata/${bankdata.id}`}>{bankdata.mobil_num}</Link>
      </td>
    </tr>
  );
}

export default Bankdata;
