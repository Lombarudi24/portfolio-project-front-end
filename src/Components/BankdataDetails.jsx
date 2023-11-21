import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;
import Reviews from "./Reviews";

function BankdataDetails() {
  const [bankdata, setBankdata] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/bookmarks/${id}`)
      .then((response) => response.json())
      .then((responseJSON) => setBankdata(responseJSON))
      .catch((error) => console.error(error));
  }, [id, API]);

  useEffect(() => {
    console.log(bookmark);
  }, [bankdata.name]);

  const handleDelete = () => {
    deleteBookmark();
  };

  const deleteBookmark = () => {
    fetch(`${API}/banksdata/${id}`, {
      method: "DELETE",
    })
      .then(() => navigate(`/banksdata`))
      .catch((error) => console.error(error));
  };
  return (
    <article>
      <h3>
        {bankdata.is_favorite ? <span>⭐️</span> : null} {bankdata.name}
      </h3>
      <h5>
        <span>
          <a href={bankdata.url}>{bankdata.firstname}</a>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {bankdata.url}
      </h5>
      <h6>{bankdata.category}</h6>
      <p>{bankdata.description}</p>
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
      <Reviews />
    </article>
  );
}

export default BankdataDetails;
