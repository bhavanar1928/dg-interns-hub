import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-mark">DG</span>
            <span>Interns Hub</span>
          </Link>
          <p>
            Connecting students and aspiring professionals with meaningful
            internship opportunities.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <p>hello@dginternshub.com</p>
          <p>Chennai, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DG Interns Hub. Built with React JS.</p>
      </div>
    </footer>
  );
}

export default Footer;