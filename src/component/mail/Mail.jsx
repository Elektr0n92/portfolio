import React, { useEffect, useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { RingLoader } from "react-spinners";
import "./Mail.css";
const template = process.env.REACT_APP_EMAILJS_TEMPLATEID;
const service = process.env.REACT_APP_EMAILJS_SERVICEID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLICKEY;
const publicKeyRecapcha = process.env.REACT_APP_RECAPCHA;

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const form = useRef();
  const recaptchaRef = useRef();

  useEffect(() => {
    fetch("http://localhost:3001/api/hello")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.log(error));
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Valider le reCAPTCHA ici
    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      alert("Veuillez compléter le reCAPTCHA.");
      return;
    }

    setIsLoading(true);

    emailjs.sendForm(service, template, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        alert("Message envoyé");
        form.current.reset();
        recaptchaRef.current.reset();
        setIsLoading(false);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      {isLoading && (
        <div className="spinner-container">
          <RingLoader size={100} color={"#123abc"} />
        </div>
      )}
      <form
        ref={form}
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-2 w-full"
      >
        <label>Nom</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <div className="flex justify-center">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={publicKeyRecapcha}
            theme="dark"
            onChange={() => {
              // Gérer l'événement onChange du captcha si nécessaire
            }}
          />
        </div>
        <input type="submit" value="Send" className="text-white border mt-5" />
      </form>
    </>
  );
};

export default ContactUs;
