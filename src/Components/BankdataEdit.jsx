import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


const API = import.meta.env.VITE_BASE_URL;

function BankdataEditForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [bankdata, setBankdata] = useState({
    ssn: "",
    firstname: "",
    middlename: "",
    lastname: "",
    dob: "",
    email: "",
    city: "",
    mobile_num: "",
    employer: "",
  });

  const handleTextChange = (event) => {
    setBankdata({ ...bankdata, [event.target.id]: event.target.value });
  };

 
  const updateBankdata = () => {
    axios
      .put(
        `${API}/banksdata/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("Updated bank data:", response.data);
        // Assuming you have a 'navigate' function for routing purposes
        navigate(`/${id}`);
      })
      .catch((error) => console.error("Error:", error));
    };

  useEffect(() => {
    axios.get(`${API}/${id}`)
      .then((response) => {
        const updatedBankdata = response.data || 
          {
    ssn: "",
    firstname: "",
    middlename: "",
    lastname: "",
    dob: "",
    email: "",
    city: "",
    mobile_num: "",
    employer: "",
  }
        setBankdata(updatedBankdata);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateBankdata();
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="socialsecuritynumber">Social Number</label>
        <input
          id="ssn"
          value={bankdata.ssn}
          type="number"
          onChange={handleTextChange}
        />
        <label htmlFor="firstname">Firts Name</label>
        <input
          id="fname"
          type="text"
          name="firstname"
          value={bankdata.firstname}
          onChange={handleTextChange}
        />{" "}
        <label htmlFor="lastname">Last Name</label>
        <input
          id="lastname"
          type="text"
          name="lastname"
          value={bankdata.lastname}
          onChange={handleTextChange}
        />{" "}
        <label htmlFor="middlename">Middle Name</label>
        <input
          id="name"
          type="text"
          name="middlename"
          value={bankdata.middlename}
          onChange={handleTextChange}
        />{" "}
        <label htmlFor="dob">DOB</label>
        <input
          id="dob"
          name="dob"
          value={bankdata.dob}
          onChange={handleTextChange}
        />{" "}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={bankdata.email}
          onChange={handleTextChange}
        />{" "}
        <label htmlFor="dob">Phone Num</label>
        <input
          id="phone"
          name="phone"
          value={bankdata.mobile_num}
          onChange={handleTextChange}
        />{" "}
        <label htmlFor="dob">Employer</label>
        <input
          id="employer"
          name="employer"
          value={bankdata.employer}
          onChange={handleTextChange}
        />
        <br />
      </form>
      <br />
      <div className="text-center">
        <Link to={`/${id}`} className="">
          <button className="btn btn-primary mx-3">Nevermind</button>
        </Link> {' '}
        <Link to={`/${id}`} className="">
          <button className="btn btn-primary mx-3" onClick={handleSubmit}>
            Save
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BankdataEditForm;
