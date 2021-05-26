import React, { useEffect, useState } from "react";

function Header() {
  const [status, setStatus] = useState(undefined);
  const [openModal, setModal] = useState(undefined);

  const transitionNavBar = () =>
    window.scrollY > 400 ? setStatus(true) : setStatus(false);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const fadeOut = () => {
    if (openModal === undefined) return "noneModal";
    return "fadeOut";
  };

  return (
    <div className={`header ${status ? "header-scrolled" : "fixed-top"}`}>
      <div
        className={`modal ${openModal ? "fadeIn" : fadeOut()} hide-for-desktop`}
        onClick={() => setModal(false)}
      >
        <div
          className={`modal-container ${openModal ? "opened" : "closed"}`}
          onClick={(event) => event.stopPropagation()}
        >
          <ul>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="left">
          <h1>DevFolio</h1>
        </div>
        <div className="right">
          <ul
            onClick={() => setModal(true)}
            className={`hide-for-desktop ${openModal ? "opened" : "closed"}`}
          >
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul className="hide-for-tablet">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#projects">PROJECT</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
