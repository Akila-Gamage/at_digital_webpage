import { NavLink } from "react-router-dom";

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <div className={`backdrop ${open ? "show" : ""}`} onClick={onClose} />
      <aside className={`sidebar ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="d-flex py-5 px-2">
          <div className=" col-10">
            <nav className="sidebar-links" onClick={onClose}>
              <NavLink to="/" end>
                HOME
              </NavLink>
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
          </div>

          <div className="col-2 d-flex justify-content-center align-items-start">
            <button  onClick={onClose} aria-label="Close menu">
              <i
                className="bi bi-x-lg fs-1"
                style={{ color: "var(--text)" }}
              />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
