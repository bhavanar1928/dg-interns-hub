import React, { useMemo, useState } from "react";
import JobCard from "../components/JobCard";
import { jobs } from "../data/jobs";

function Jobs() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(jobs.map((job) => job.category)),
  ];

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const searchableText = `
        ${job.title}
        ${job.company}
        ${job.location}
        ${job.skills.join(" ")}
      `.toLowerCase();

      const matchesSearch = searchableText.includes(
        search.toLowerCase()
      );

      const matchesCategory =
        category === "All" || job.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <section className="section jobs-page">
      <div className="container">

        {/* Page Heading */}
        <div className="page-heading">
          <span className="eyebrow">
            Internship Opportunities
          </span>

          <h1>Find Your Next Internship</h1>

          <p>
            Explore internship opportunities and discover a role
            that matches your skills and interests.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="filters">

          <div className="search-box">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search jobs, companies or skills..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />
          </div>

          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value)
            }
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

        </div>

        {/* Results Information */}
        <div className="results-row">
          <strong>
            {filteredJobs.length} opportunities found
          </strong>

          <span>
            Updated regularly
          </span>
        </div>

        {/* Job Cards */}
        {filteredJobs.length > 0 ? (

          <div className="job-grid">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
              />
            ))}
          </div>

        ) : (

          <div className="empty-state">
            <div>🔍</div>

            <h3>
              No opportunities found
            </h3>

            <p>
              Try another search term or category.
            </p>
          </div>

        )}

      </div>
    </section>
  );
}

export default Jobs;