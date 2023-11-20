import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1>
        <Link to="/bankdata">Banks Data</Link>
      </h1>
      <button>
        <Link to="/bankdata/new">New Costumer</Link>
      </button>
    </nav>
  );
}
