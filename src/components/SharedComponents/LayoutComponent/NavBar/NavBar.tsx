import { useState } from 'react';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import type { NavbarProps } from '../../../../types';
import bars from "../../../../assets/icons/Bars.png"

const Navbar = ({ links, logo }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar between-flex p-relative">

      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="Little Learners Logo" />
        </Link>
      </div>

      <div className={`navbar__links flex ${isMenuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            className={({ isActive }) => `nav-item  ${isActive ? "active-link" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      <button className="nav-item mobile-bars" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img src={bars} alt="Toggle Menu" />
      </button>
    </nav >
  );
};

export default Navbar;
