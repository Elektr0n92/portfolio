import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Mail.css";
const template = process.env.REACT_APP_EMAILJS_TEMPLATEID;
const service = process.env.REACT_APP_EMAILJS_TEMPLATEID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLICKEY;

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service, template, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        alert("Message envoyé");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col">
      <label>Nom</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" required />
      <input type="submit" value="Send" className="text-white border" />
    </form>
  );
};

export default ContactUs;
