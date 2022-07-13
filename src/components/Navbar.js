import React from "react";
// import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <li>
          <i class="fa fa-bars"></i>
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Intel_logo_%282020%2C_dark_blue%29.svg"
            alt=""
            srcset=""
          />
        </li>
        <li>
          <i class="fa fa-envelope"></i>
          <div className="line"></div>
          <div className="userName"></div>
        </li>
      </nav>
    </>
  );
};

export default Navbar;
