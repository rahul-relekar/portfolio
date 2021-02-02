import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import Logo from "../Assets/images/img-11.png";
import "./Footer.scss";
import Particles from "react-particles-js";

function Footer() {
  return (

      <div className="footer-container">
   
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Join the adventure</p>

        <p className="footer-subscription-text">Unsubscribe anytime</p>

        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo" to="/">
              <img src={Logo} alt="random" width="75rem" height="60rem"></img>
            </Link>
          </div>
          <small className="website-rights">Rahul Relekar</small>
          <div className="social-icons">
            {/* Facebook */}
            <a
              aria-label="Email"
              className="social-icon-link facebook"
              target="_blank"
              href="mailto:rare0075@gmail.com"
            >
              <i class="far fa-envelope"></i>
            </a>

            {/* Instagram */}
            <a
              aria-label="Instagram"
              className="social-icon-link linkedin"
              target="_blank"
              href="https://www.instagram.com/rahul_relekar/?hl=en"
            >
              <i className="fab fa-instagram" />
            </a>

            {/* Linkedin */}
            <a
              aria-label="Linkedin"
              className="social-icon-link linkedin"
              target="_blank"
              href="https://www.linkedin.com/in/rahul-relekar-07896b16b/"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
