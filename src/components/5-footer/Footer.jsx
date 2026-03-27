import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <button
            onClick={() => {
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" });
            }}>
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" });
            }}>
            Skills
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}>
            Projects
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}>
            Contact
          </button>
        </li>
      </ul>

      <p>© 2026 All rights reserved.</p>
    </footer>
  );
};

export default Footer;
