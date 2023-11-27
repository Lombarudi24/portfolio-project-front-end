import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;


function BankdataDetails() {
  const [bankdata, setBankdata] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/banksdata/${id}`)
      .then((response) => response.json())
      .then((responseJSON) => setBankdata(responseJSON))
      .catch((error) => console.error(error));
  }, [id, API]);

  // useEffect(() => {
  //   console.log(bankdata);
  // }, [bankdata.firstname]);

  const handleDelete = () => {
    deleteBankdata();
  };

  const deleteBankdata = () => {
    fetch(`${API}/banksdata/${id}`, {
      method: "DELETE",
    })
      .then(() => navigate(`/banksdata`))
      .catch((error) => console.error(error));
  };

      
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   addBankdata();
  // }

  return (
        
    <article>
      <h6>
        <span>
          {bankdata.firstname}
        </span>
    
      </h6>
      <h6>{bankdata.lastnane}</h6>
      <p>{bankdata.dob}</p>
      <div className="showNavigation">
        <div>
          <Link to={`/banksdata`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/banksdata/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
        
    </article>
  );
} 

  export default BankdataDetails;

   
      // <h6>{bankdata.firstname}</h6>
      {/* <label htmlFor="firstname">First Name</label>
      <input
        id="firstname"
        name="firstname"
        value={bankdata.firstname}
        placeholder="First Name"
        onChange={handleTextChange}
        required
      />{" "}
      <label htmlFor="lname">Last Name:</label>
      <input
        id="lastname"
        name="lastname"
        value={bankdata.lastname}
        placeholder="Lastname"
        onChange={handleTextChange}
        required
      />{" "}
      <label htmlFor="middlename">Middle Name</label>
      <input
        id="mname"
        name="middlename"
        value={bankdata.middlename}
        placeholder="Middlename"
        onChange={handleTextChange}
      />{" "}
      <label htmlFor="dob">DOB</label>
      <input
        id="dob"
        name="dob"
        value={bankdata.dob}
        onChange={handleTextChange}
        placeholder="Date of Birth"
        required
      />{" "}
      <label htmlFor="emial">Email</label>
      <input
        id="email"
        name="email"
        value={bankdata.email}
        onChange={handleTextChange}
        placeholder="Email Address "
      />{" "}
      <label htmlFor="city">City</label>
      <input
        id="city"
        name="city"
        value={bankdata.city}
        onChange={handleTextChange}
        placeholder="City you Live "
      />{" "}
      <label htmlFor="phone">Phone Num</label>
      <input
        id="phone"
        name="phone"
        value={bankdata.mobile_num}
        onChange={handleTextChange}
        placeholder="Phone Number"
      />{" "}
      <label htmlFor="employer">Employer</label>
      <input
        id="employer"
        name="employer"
        value={bankdata.employer}
        onChange={handleTextChange}
        placeholder="Employer"
      />
      <br /> */}
//       <div>
//         <button onClick={handleDelete}>Delete</button>{" "}
//       </div>
//       <div>
//         <Link to={`/banksdata/${id}/edit`}>
//           <button>Edit</button>{" "}
//         </Link>
//       </div>
//     </div>
//   );
// }
    




