import React from "react";
import { ReactComponent as Logo } from "../assets/svgs/logo.svg";
import { ReactComponent as Twitter } from "../assets/svgs/twitter.svg";
import { ReactComponent as LinkedIn } from "../assets/svgs/linkedin.svg";
import { ReactComponent as Instagram } from "../assets/svgs/instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div id="footer-inner" className="container">
        <div className="footer-logo-wrapper">
          <Logo />
          <ul>
            <li>© 2020 Startupz. </li>
            <li>All rights reserved. </li>
          </ul>
        </div>
        <div className="">
          <h4>Companies</h4>
          <ul>
            <li>
              <a href="">Tolq</a>
            </li>
            <li>
              <a href="">LegalSite</a>
            </li>
            <li>
              <a href="">Codekeeper</a>
            </li>
            <li>
              <a href="">Feedback Labs</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h4>Companies</h4>
          <ul>
            <li>World Trade Center - The Hague</li>
            <li>Prinses Margrietplantsoen 33</li>
            <li>2595 AM The Hague</li>
            <li>The Netherlands</li>
            <li style={{ marginTop: "8px" }}>
              <a href="">Send us an email</a>
            </li>
          </ul>
        </div>
        <div className="socials">
          <h4>Follow us</h4>
          <ul>
            <li>
              <a href="">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="">
                <LinkedIn />
              </a>
            </li>
            <li>
              <a href="">
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
