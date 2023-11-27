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

  // Add a  bankdata and Redirect to the index view.
  const addBankdata = () => {
    fetch(`${API}/banksdata`, {
      method: "POST",
      body: JSON.stringify(bankdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setBankdata({ ...bankdata, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBankdata();
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="socialsecuritynumber">Social Number</label>
        <input
          id="ssn"
          value={bankdata.ssn}
          type="number"
          onChange={handleTextChange}
          placeholder="Social Security Num."
          required
        />
        <label htmlFor="firstname">First Name</label>
        <input
          id="firstname"
          name="firstname"
          value={bankdata.firstname}
          placeholder="First Name"
          onChange={handleTextChange}
          required
        />{" "}
        <label htmlFor="lastname">Last Name:</label>
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
        <label htmlFor="Phone">Phone Num</label>
        <input
          id="phone"
          name="phone"
          value={bankdata.mobile_num}
          onChange={handleTextChange}
          placeholder="Phone Number"
        />{" "}
        <label htmlFor="emplyer">Employer</label>
        <input
          id="employer"
          name="employer"
          value={bankdata.employer}
          onChange={handleTextChange}
          placeholder="Employer"
        />
        <br />
        <input type="submit" onClick={handleNew} />
      </form>
    </div>
  );
}

export default BankdataNewForm;
