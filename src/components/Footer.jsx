import React from "react";

const date = new Date();
let currentYear = date.getFullYear();

function Footer() {
  return (
    <div>
      <footer>
        <p>copyright {currentYear}</p>
      </footer>
    </div>
  );
}

export default Footer;
