import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          Gadget<span>Byte</span>
        </h3>

        <p className="footer-company-name">GadgetByte © 2023</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fas fa-map-marker"></i>
          <p>
            <span>444 New York, NY, NY</span>
          </p>
        </div>

        <div>
          <i className="fas fa-phone"></i>
          <p>+1 999-999-9999</p>
        </div>

        <div>
          <i className="fas fa-envelope"></i>
          <p>
            <Link to="mailto:gadgetbyte@company.com">
              gadgetbyte@company.com
            </Link>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div className="footer-icons">
          <Link to="https://www.facebook.com">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to="https://www.twitter.com">
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link to="https://www.github.com">
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link to="https://www.youtube.com">
            <i className="fa-brands fa-youtube"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
