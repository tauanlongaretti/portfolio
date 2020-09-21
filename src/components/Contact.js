import React from "react";
import emailjs from "emailjs-com";

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
    <div className="form-wrapper">
      <div className="form-container p-4">
        <div className="form-ribbon">
          <form
            className="contact-form d-flex flex-column"
            onSubmit={sendEmail}
          >
            <label className="text-black mb-1">Subject</label>
            <input type="text" name="subject" />
            <label className="text-black mt-2 mb-1">Name</label>
            <input type="text" name="name" />
            <label className="text-black mt-2 mb-1">Email</label>
            <input type="email" name="email" />
            <label className="text-black mt-2 mb-1">Message</label>
            <textarea name="message" />
            <input className="mt-4" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
