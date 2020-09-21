import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_cr2nbca", e.target, "user_l5fNQ8O2z7MfawGOFLH3M")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;
