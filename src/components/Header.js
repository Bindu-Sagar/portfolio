import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="username-container">
        <p className="username">Bindu Sagar</p>
      </div>

      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      <nav className={`navbar-container ${isOpen ? 'open' : ''}`}>
        <ul className="navbar">
        <a href="#skills" className="nav-link"><li className="nav-items">Skills</li></a>
        <a href="#experience" className="nav-link"><li className="nav-items">Experience  </li></a>
        <a href="#projects" className="nav-link">  <li className="nav-items">Projects</li></a>
        <a href="#education" className="nav-link"><li className="nav-items">Education</li></a>
        <a href="#certificates" className="nav-link">  <li className="nav-items">Certificates</li></a>
        <a href="#contact" className="nav-link">  <li className="nav-items">Contact</li></a>
        </ul>
      </nav>

    </div>
  );
};

export default Header;
