import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="section">
      <div className="container empty-state">
        <div>404</div>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="primary-btn">Back to Home</Link>
      </div>
    </section>
  );
}

export default NotFound;