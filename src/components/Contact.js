import React from "react";
import "../static/css/_contact.scss";
import Social from "./Social";

function Contact() {
  return (
    <div>
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>Get in Touch with me to learn more!</p>
        <div className="contact-social">
          <Social />
        </div>
      </div>
    </div>
  );
}

export default Contact;
