import React, {useState} from 'react';
import { Menu, X } from 'lucide-react';
const Header = () =>{
  const [isOpen, setIsOpen] = useState(false);
  return(
    <div className="header">
      <div class="username-container">
        <p class="username">Bindu Sagar</p>
      </div>
      {/* Mobile Menu Button */}
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>
        <nav className={`navbar-container ${isOpen ? 'open' : ''}`}>
        <ul className="navbar">
          <li className="nav-items">Skills</li>
          <li className="nav-items">Experience</li>
          <li className="nav-items">Certificates</li>
          <li className="nav-items">Projects</li>
          <li className="nav-items">Contact</li>
        </ul>
        </nav>
      </div>
  )
}
export default Header;