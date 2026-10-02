import React, { useState } from "react";

function JobCard({ job }) {
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    setApplied(true);
  };

  return (
    <article className="job-card">
      <div className="job-top">
        <div className="company-icon">{job.company.charAt(0)}</div>
        <span className="job-badge">{job.type}</span>
      </div>

      <div className="job-content">
        <span className="category">{job.category}</span>
        <h3>{job.title}</h3>
        <p className="company-name">{job.company}</p>

        <p className="job-description">{job.description}</p>

        <div className="job-meta">
          <span>📍 {job.location}</span>
          <span>⏱ {job.duration}</span>
          <span>💰 {job.stipend}</span>
        </div>

        <div className="skills">
          {job.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <button
          className={`apply-btn ${applied ? "applied" : ""}`}
          onClick={handleApply}
          disabled={applied}
        >
          {applied ? "✓ Application Started" : "Apply Now →"}
        </button>
      </div>
    </article>
  );
}

export default JobCard;