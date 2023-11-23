import React from "react";
import { Link } from "react-router-dom";


// function FixingDob(date) {
//   let fixedDob = date.split("T");
//   fixedDob = moment(date).format("MMMM D YYYY");
//   return fixedDob;
// }
 

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
        <Link to={`/banksdata/${bankdata.id}`}>
          {bankdata.dob}
        </Link>
        
      </td>
      <td>
        <Link to={`/banksdata/${bankdata.id}`}>{bankdata.email}</Link>
      </td>
      <td>
        <Link to={`/banksdata/${bankdata.id}`}>{bankdata.mobile_num}</Link>
      </td>
    </tr>
    
  );
}

export default Bankdata;
