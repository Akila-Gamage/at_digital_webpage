import { NavLink } from "react-router-dom";

export default function Navbar({ onMenu }) {
  return (
    <header className="app-navbar">
      <div className="brand">
        <img src="src/assets/Logo.png" alt="MyApp Logo" />
        <NavLink to="/" end></NavLink>
      </div>
      <button className="burger" onClick={onMenu} aria-label="Open menu">
        <i className="bi bi-list" style={{ fontSize: "3rem" }} />
      </button>
      <nav className="nav-links">
        <NavLink to="/" end>
          SERVICES
        </NavLink>
        <NavLink to="/" end>
          ABOUT US
        </NavLink>
        <NavLink to="/" end>
          CONTACT US
        </NavLink>
        <NavLink to="/" end>
          CAREERS
        </NavLink>
      </nav>
    </header>
  );
}
