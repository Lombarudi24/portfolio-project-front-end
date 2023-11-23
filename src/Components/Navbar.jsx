import { Link } from "react-router-dom";
import Home from "../Pages/Home";

export default function Navbar() {
  return (
    <nav>
      <h1>
        <Link to="/banksdata">Banks Data</Link>
      </h1>
      <button>
        <Link to="/bankdata/new">New Costumer</Link>
      </button>
    </nav>
  );
}
