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

//   const handleCheckboxChange = () => {
//     setBookmark({ ...bookmark, is_favorite: !bookmark.is_favorite });
//   };

  // Update a bookmark. Redirect to show view
  const updateBankdata = () => {
    console.log(`${API}/banksdata/${id}`);

    fetch(`${API}/banksdata/${id}`, {
      method: "PUT",
      body: JSON.stringify(bankdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        navigate(`/banksdata/${id}`);
      })
      .catch((error) => console.error("catch", error));
  };

  // On page load, fill in the form with the bookmark data.
  useEffect(() => {
    fetch(`${API}/banksdata/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setBankdata(response);
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
          placeholder="Social Security Num."
          required
        />
        <label htmlFor="url">Firts Name</label>
        <input
          id="fname"
          type="text"
          name="firstname"
          value={bankdata.firstname}
          placeholder="First Name"
          onChange={handleTextChange}
          required
        />{" "}
        <label htmlFor="lname">Last Name:</label>
        <input
          id="lastname"
          type="text"
          name="lastname"
          value={bankdata.lastname}
          placeholder="Lastname"
          onChange={handleTextChange}
          required
        />{" "}
        <label htmlFor="middlename">Middle Name</label>
        <input
          id="mname"
          type="text"
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
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={bankdata.email}
          onChange={handleTextChange}
          placeholder="Email Address "
        />{" "}
        <label htmlFor="dob">Phone Num</label>
        <input
          id="phone"
          name="dob"
          value={bankdata.mobile_num}
          onChange={handleTextChange}
          placeholder="Phone Number"
        />{" "}
        <label htmlFor="dob">Employer</label>
        <input
          id="employer"
          name="employer"
          value={bankdata.employer}
          onChange={handleTextChange}
          placeholder="Employer"
              />
              
        <br />
        <input type="submit" />
      </form>
      <Link to={`/bank/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default BankdataEditForm;
