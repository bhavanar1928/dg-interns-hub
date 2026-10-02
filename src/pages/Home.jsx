import React from "react";
import { Link } from "react-router-dom";
import JobCard from "../components/JobCard";
import { jobs } from "../data/jobs";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">🚀 Start your career journey</span>
            <h1>
              Find internships that
              <span> move you forward.</span>
            </h1>
            <p>
              Explore real-world opportunities, build practical skills and
              connect with organizations looking for the next generation of
              talent.
            </p>

            <div className="hero-actions">
              <Link to="/jobs" className="primary-btn">Explore Jobs →</Link>
              <Link to="/contact" className="secondary-btn">Contact Us</Link>
            </div>

            <div className="hero-stats">
              <div><strong>500+</strong><span>Opportunities</span></div>
              <div><strong>100+</strong><span>Companies</span></div>
              <div><strong>10K+</strong><span>Students</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card main-visual-card">
              <div className="visual-icon">💼</div>
              <h3>Your next opportunity is here.</h3>
              <p>Discover internships matched to your skills and goals.</p>
              <div className="mini-progress">
                <span></span>
              </div>
              <small>Career progress</small>
            </div>
            <div className="floating-card floating-one">✨ 100+ Companies</div>
            <div className="floating-card floating-two">🎯 Skill-based Roles</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Featured opportunities</span>
              <h2>Explore popular internships</h2>
            </div>
            <Link to="/jobs" className="text-link">View all jobs →</Link>
          </div>

          <div className="job-grid">
            {jobs.slice(0, 3).map((job) => <JobCard key={job.id} job={job} />)}
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">Why DG Interns Hub?</span>
            <h2>Everything you need to take the next step</h2>
            <p>Simple tools and opportunities designed for students and fresh talent.</p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🔎</div>
              <h3>Discover Opportunities</h3>
              <p>Find internships across development, design, data, marketing and more.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧑‍💻</div>
              <h3>Build Experience</h3>
              <p>Work on practical projects and strengthen the skills employers need.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Grow Your Career</h3>
              <p>Turn your internship experience into confidence and career momentum.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <span className="eyebrow">Ready to begin?</span>
            <h2>Your next learning opportunity could be one click away.</h2>
          </div>
          <Link to="/jobs" className="primary-btn">Browse Internships →</Link>
        </div>
      </section>
    </>
  );
}

export default Home;