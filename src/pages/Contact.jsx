import React, { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <section className="section contact-page">
      <div className="container">
        <div className="contact-grid">

          <div className="contact-info">
            <span className="eyebrow">Get in touch</span>

            <h1>
              Let’s talk about your career journey.
            </h1>

            <p>
              Have a question about an internship, application or partnership?
              Send us a message and the DG Interns Hub team will get back to you.
            </p>

            <div className="contact-items">

              <div>
                <span>📧</span>
                <div>
                  <strong>Email</strong>
                  <p>hello@dginternshub.com</p>
                </div>
              </div>

              <div>
                <span>📍</span>
                <div>
                  <strong>Location</strong>
                  <p>Chennai, India</p>
                </div>
              </div>

              <div>
                <span>🕐</span>
                <div>
                  <strong>Support hours</strong>
                  <p>Mon – Fri, 9 AM – 6 PM</p>
                </div>
              </div>

            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <h2>Send us a message</h2>

            {submitted && (
              <div className="success-message">
                ✓ Thanks! Your message has been received.
              </div>
            )}

            <label>
              Full Name
              <input
                required
                type="text"
                placeholder="Enter your name"
              />
            </label>

            <label>
              Email Address
              <input
                required
                type="email"
                placeholder="you@example.com"
              />
            </label>

            <label>
              Subject
              <input
                required
                type="text"
                placeholder="How can we help?"
              />
            </label>

            <label>
              Message
              <textarea
                required
                rows="5"
                placeholder="Write your message..."
              ></textarea>
            </label>

            <button
              className="primary-btn full-btn"
              type="submit"
            >
              Send Message →
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;