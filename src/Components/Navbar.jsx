import { Link } from "react-router-dom";
import Home from "../Pages/Home";

export default function Navbar() {
  return (
    <nav>
      <h1>
        <Link to="/Banksdata">Banks Data</Link>
      </h1>
      <button>
        <Link to="/new">New Costumer</Link>
      </button>
    </nav>
  );
}
