import { useState, useEffect } from "react";
import Bankdata from "./Bankdata"

const API = import.meta.env.VITE_BASE_URL;

function Banksdata() {
  const [banksdata, setBanksdata] = useState([]);

    const fetchData = async () => {
      try {
        fetch(`${API}/bankdata`)
          .then((response) => response.json())
          .then((response) => {
            setBanksdata(response);
          });
      } catch (e) {
        console.log(e);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

  return (
    <div className="banksdata">
      <section>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Date Of Birth</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {banksdata.map((bankdata) => {
              return <Bankdata key={bankdata.id} bankdata={bankdata} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Banksdata;
