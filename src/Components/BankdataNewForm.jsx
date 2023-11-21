import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function BankdataNewForm() {
  const navigate = useNavigate();
  const [bankdata, setBankdata] = useState({
    ssn: "",
    firstname: "",
    middlename: "",
    lastname: "",
    dob: "",
    email: "",
    city: '',
    mobile_num: "",
    employer: "",
  });

  // Add a bookmark. Redirect to the index view.
  const addBankdata = () => {
    fetch(`${API}/banksdata`, {
      method: "POST",
      body: JSON.stringify(bankdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/banksdata`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setBankdata({ ...bankdata, [event.target.id]: event.target.value });
  };

  // const handleCheckboxChange = () => {
  //   setBankdata({ ...bankdata, is_active: !bankdata.is_active });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBankdata();
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Social Number:</label>
        <input
          id="ssn"
          value={bankdata.ssn}
          type="number"
          onChange={handleTextChange}
          placeholder="Social Security Num."
          required
        />
        <label htmlFor="url">Firts Name:</label>
        <input
          id="fname"
          type="text"
          name="firstname"
          required
          value={bankdata.firstname}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="lname">Last Name:</label>
        <input
          id="lastname"
          type="text"
          name="lastname"
          value={bankdata.lastname}
          placeholder="Lastname"
          onChange={handleTextChange}
        />
        <label htmlFor="middlename">Middle Name</label>
        <input
          id="mname"
          type="text"
          name="middlename"
          value={bankdata.middlename}
          placeholder="Middlename"
          onChange={handleTextChange}
        />
        <label htmlFor="dob">DOB</label>
        <textarea
          id="dob"
          name="dob"
          value={bankdata.dob}
          onChange={handleTextChange}
          placeholder="Date of Birth"
        />
        <label htmlFor="dob">DOB</label>
        <textarea
          id="dob"
          name="dob"
          value={bankdata.description}
          onChange={handleTextChange}
          placeholder="Date of Birth"
        />
        <label htmlFor="dob">Email</label>
        <textarea
          id="email"
          name="email"
          value={bankdata.email}
          onChange={handleTextChange}
          placeholder="Email Address "
        />{" "}
        <label htmlFor="dob">Phone Num</label>
        <textarea
          id="phone"
          name="dob"
          value={bankdata.mobile_num}
          onChange={handleTextChange}
          placeholder="Date of Birth"
        />
        <label htmlFor="dob">Employer</label>
        <textarea
          id="employer"
          name="employer"
          value={bankdata.employer}
          onChange={handleTextChange}
          placeholder="Employer"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default BankdataNewForm;
