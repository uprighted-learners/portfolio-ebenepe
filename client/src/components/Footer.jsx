import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="footer">
      <ul id="footer-top">
        <li>
          <a href="https://www.linkedin.com/in/erik-benepe/">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.github.com/ebenepe/">GitHub</a>
        </li>
      </ul>
      <br />
      <ul id="footer-bottom">
        <li>Copyright 2021 Erik Benepe</li>
      </ul>
    </div>
  );
}

export default Footer;
