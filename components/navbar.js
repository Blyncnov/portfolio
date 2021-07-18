import React, { useState } from "react";
import Link from "next/link";

import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const mobileClickHandler = () => {
    setClick(!click);
  };

  return (
    <>
      <IconContext.Provider
        value={{
          color: "red",
        }}
      >
        <div id="home" className="navbar__container">
          <div className="navbar">
            <div className="logo">
              <h1 className="logo__text">Blyncnov</h1>
            </div>
            <div className="menu">
              <ul
                onClick={mobileClickHandler}
                className={click ? "pc" : "mobile"}
              >
                <li onClick={mobileClickHandler}>
                  <Link href="#home">
                    <a style={{ color: "white" }}>Home</a>
                  </Link>
                </li>
                <li onClick={mobileClickHandler}>
                  <Link href="#work">
                    <a style={{ color: "white" }}>Work</a>
                  </Link>
                </li>
                <li onClick={mobileClickHandler}>
                  <Link href="#portfolio">
                    <a style={{ color: "white" }}>Portfolio</a>
                  </Link>
                </li>
                <li onClick={mobileClickHandler}>
                  <Link href="/template">
                    <a style={{ color: "white" }}>Template</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mobile__icon" onClick={mobileClickHandler}>
              {click ? (
                <FaTimes style={{ color: "white", fontSize: "1.5rem" }} />
              ) : (
                <FaBars style={{ color: "white", fontSize: "1.5rem" }} />
              )}
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
