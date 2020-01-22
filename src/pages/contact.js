import React from "react";
import "../styles/contact.css";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Contact = () => (
  <Layout>
    <div className="container py-5">
      <h1>Contact Me</h1>
      <p className="text-center">
        Please feel free to send me any questions or inquiries by submitting the
        form below. I will get back to you as soon as possible.
      </p>
      <form id="contact-form" className="form" netlify="true">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="John Smith"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="johnsmith@gmail.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="message"
            className="form-control"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-outline-light">
          Send Message
        </button>
      </form>
    </div>
  </Layout>
);

export default Contact;
