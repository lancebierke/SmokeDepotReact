import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import LOGO from "../Images/logo_v1.png";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Sign Up and Never Miss A Deal
        </p>
        <h6 className="footer-subscription-text">
          You can unsubscribe at any time.
        </h6>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="firstName"
              type="firstName"
              placeholder="First Name"
            />
            <input
              className="footer-input"
              name="lastName"
              type="lastName"
              placeholder="Last Name"
            />
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact">
              <a href="#contact">Contact</a>
            </Link>
            <Link>
              <a href="/">Staff</a>
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="https://www.instagram.com/smokedepotlv/">Instagram</Link>
            <Link to="https://www.facebook.com/smokedepotlv">Facebook</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              {/* Smoke Depot */}
              {/* <i class="fab fa-typo3" /> */}
              <img
                img
                src={LOGO}
                style={{ height: "75px", width: "auto" }}
                alt="logo"
              ></img>
            </Link>
          </div>
          <small class="website-rights">Smoke Depot © 2021</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            {/* <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            > */}
            {/* <i class="fab fa-youtube" /> */}
            {/* </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer;
