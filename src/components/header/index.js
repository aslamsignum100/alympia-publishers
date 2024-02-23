import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import '../header/header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const handleLogoClick = () => {
    setActiveLink(null); // Remove active link when logo is clicked
  };

  const links = [
    { to: '/about', text: 'About Us' },
    { to: '/books', text: 'Books' },
    { to: '/authors', text: 'Authors' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <nav className='py-5'>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between flex-wrap ">
          <div className='logo'>
            <Link to="/" className='logoLink' onClick={handleLogoClick}>
              <img src={logo} alt='Olympia publishers logo' className='img-fluid' />
            </Link>
          </div>
          <div className="header__links">
            <ul className='list-inline list-unstyled m-0 d-flex align-items-center'>
              {links.map((link, index) => (
                <li
                  key={index}
                  className={`list-inline-item pr-4 ${activeLink === index ? 'active' : ''}`}
                  onClick={() => handleLinkClick(index)}
                >
                  <Link to={link.to}>{link.text}</Link>
                </li>
              ))}
              <li className="list-inline-item"><button className="primaryBtn customBtn">SUBMISSIONS</button></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;
