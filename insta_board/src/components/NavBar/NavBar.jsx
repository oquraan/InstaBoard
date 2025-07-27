"use client";
import { DarkModeContext } from "../../context/DarkModeContext";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const darkModeContext = useContext(DarkModeContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Qur3an</span>
        </Link>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/homePage" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link">
              Services
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Team
            </Link>
          </li>
        </ul>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
        </div>

        <ul className={`navbar-menu-mobile ${isMenuOpen ? "active" : ""}`}>
          <li className="navbar-item-mobile">
            <Link href="/" className="navbar-link-mobile" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="navbar-item-mobile">
            <Link
              href="/about"
              className="navbar-link-mobile"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="navbar-item-mobile">
            <Link
              href="/services"
              className="navbar-link-mobile"
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li className="navbar-item-mobile">
            <Link
              href="/contact"
              className="navbar-link-mobile"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export function Footer() {
  return (
    <nav className="navbar footer">
      <div className="navbar-container">Omar Al-Quraan</div>
    </nav>
  );
}

export default { Navbar, Footer };
