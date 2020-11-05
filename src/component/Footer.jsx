import React from "react";

function Footer() {
  let date = new Date().getFullYear();
  return (
    <footer>
      <p>{date} Copyright &copy;</p>
    </footer>
  );
}

export default Footer;
