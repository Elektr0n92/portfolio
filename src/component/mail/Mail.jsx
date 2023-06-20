import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Mail.css";
const template = process.env.REACT_APP_EMAILJS_TEMPLATEID;
const service = process.env.REACT_APP_EMAILJS_SERVICEID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLICKEY;
console.log(service);
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service, template, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        alert("Message envoyé");
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-2 w-full"
    >
      <label>Nom</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" required />
      <input type="submit" value="Send" className="text-white border mt-5" />
    </form>
  );
};

export default ContactUs;
