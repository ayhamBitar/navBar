import React, { useRef, useState, useEffect } from "react";
import logo from "./logo.svg";
import { links, socialMedia } from "./data";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const refContainer = useRef(null);
  const refLinks = useRef(null);

  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    if (showLinks) {
      const divHeight = refLinks.current.getBoundingClientRect().height;

      refContainer.current.style.height = divHeight + "px";
    } else {
      refContainer.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <div className="navbar">
      <div className="navheader">
        <img src={logo} alt="logo" />
        <FaBars className="toggle" onClick={() => setShowLinks(!showLinks)} />
      </div>
      <div className={"link-container"} ref={refContainer}>
        <ul className="links" ref={refLinks}>
          {links.map((item) => {
            const { id, title, link } = item;
            return (
              <li key={id}>
                <a href={link}>{title}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="social">
        {socialMedia.map((item) => {
          const { id, icon, link } = item;
          return (
            <a key={id} href={link}>
              {icon}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
