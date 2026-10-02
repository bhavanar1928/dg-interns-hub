import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">DG</span>
          <span>Interns Hub</span>
        </NavLink>

        <button
          className="menu-btn"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/jobs" onClick={closeMenu}>Jobs</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <NavLink to="/jobs" className="nav-cta" onClick={closeMenu}>
            Find Internships
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;