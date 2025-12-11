import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <div className=" navbar bg-base-100 flex justify-between">
        <div>
          <a className="btn btn-ghost text-xl">Htp-Customer-Service</a>
        </div>
        <div className="flex items-center gap-5">
          <span>Home</span>
          <span>Faq</span>
          <span>Changelog</span>
          <span>Blog</span>
          <span>Download</span>
          <span>Contact</span>
          <button className="btn global-bg"> <span>+</span>New Ticket</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
