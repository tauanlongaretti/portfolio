import React from "react";
import emailjs from "emailjs-com";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_cr2nbca",
        e.target,
        "user_l5fNQ8O2z7MfawGOFLH3M"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="form-container">
      <h1 className="contact-header-mob gold-text">Contact Me</h1>
      <div className="form-ribbon">
        <form className="contact-form d-flex flex-column" onSubmit={sendEmail}>
          <label className="text-black my-1 pt-2">Subject</label>
          <input type="text" name="subject" />
          <label className="text-black mt-2 mb-1">Name</label>
          <input type="text" name="name" />
          <label className="text-black mt-2 mb-1">Email</label>
          <input type="email" name="email" />
          <label className="text-black mt-2 mb-1">Message</label>
          <textarea name="message" className="message-input" />
          <input className="mt-4 send-button" type="submit" value="Send" />
        </form>
      </div>
      <div className="form-text">
        <h1 className="contact-header">Contact Me</h1>
        <p className="">Thank you for taking the </p>
        <p className="">time to reach out.</p>
        <p className="mt-4">Also feel free to contact </p>
        <p>me on any of my social </p>
        <p>media accounts:</p>
        <div className="social-buttons">
          <a href="https://www.linkedin.com/in/tauan-longaretti-57879b194/">
            <LinkedInIcon className="icon" color="action" />
          </a>
          <a href="https://twitter.com/TauanL10">
            <TwitterIcon className="icon" href="" color="disabled" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
