import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const menuRef = useRef();

  const toggleMenu = (isOpen) => {
    menuRef.current.style.right = isOpen ? "0" : "-350px";
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    toggleMenu(false); // Close menu after selection in mobile view
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="nav-logo" />
      <img
        src={menu_open}
        alt="Open Menu"
        className="nav-mob-open"
        onClick={() => toggleMenu(true)}
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          alt="Close Menu"
          className="nav-mob-close"
          onClick={() => toggleMenu(false)}
        />
        {["home", "about", "service", "portfolio", "contact"].map((menu) => (
          <li key={menu}>
            <AnchorLink
              className="anchor-link"
              href={`#${menu}`}
              onClick={() => handleMenuClick(menu)}
            >
              <p>{menu.charAt(0).toUpperCase() + menu.slice(1)}</p>
            </AnchorLink>
            {activeMenu === menu && <img src={underline} alt="Underline" />}
          </li>
        ))}
      </ul>
      <button className="nav-connect">
        <AnchorLink className="anchor-link" href="#contact">
          Connect With Me
        </AnchorLink>
        <div className="arrow-wrapper">
          <div className="arrow"></div>
        </div>
      </button>
    </nav>
  );
};

export default Navbar;
