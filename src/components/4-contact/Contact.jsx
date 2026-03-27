import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";

import contactAnimation from "../../animation/contact.json";

const Contact = () => {
  const [state] = useForm("xrgvvdlo");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kfw1o75", // Service ID
        "template_9f3h27g", // Template ID
        form.current,
        "KsdMvKCW_pDytZuvy", // User ID من EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message");
        },
      );
  };

  return (
    <section id="contact" className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Email:{" "}
        <a href="mailto:abdallahelboghdady95@gmail.com">
          abdallahelboghdady95@gmail.com
        </a>
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form ref={form} onSubmit={(e) => sendEmail(e)} className="">
          <div className="flex" style={{ justifyContent: "space-between" }}>
            <label htmlFor="name">Name:</label>
            <input required type="text" name="from_name" id="name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="from_email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>
        </form>
        <div className=" animation">
          <Lottie
            className="contact-animation"
            style={{ height: 355 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

// service_kfw1o75;
// template_9f3h27g;
