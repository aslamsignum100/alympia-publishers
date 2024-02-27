import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import '../header/header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleLinkClick = (index) => {
    setActiveLink(index);
    setShowMenu(false); // Close the menu after clicking a link
  };

  const handleLogoClick = () => {
    setActiveLink(null); // Remove active link when logo is clicked
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const links = [
    { to: '/about', text: 'About Us' },
    { to: '/books', text: 'Books' },
    { to: '/authors', text: 'Authors' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <>
      <div className='container'>
        <nav className='alympia__publishers__nav navbar navbar-expand-lg py-3 py-md-4 py-lg-5 justify-content-between px-0'>
          <Link to='/' className='navbar-brand' onClick={handleLogoClick}>
            <img src={logo} alt='Olympia publishers logo' className='img-fluid' />
          </Link>
          <button className='navbar-toggler' type='button' onClick={toggleMenu}>
            ☰
          </button>
          <div className={`header__links collapse navbar-collapse ${showMenu ? 'show' : ''}`}>
            <ul className='navbar-nav align-items-lg-center ml-auto mt-4 mt-lg-0 mt-0'>
              {links.map((link, index) => (
                <li className={`nav-item mr-lg-5 mb-lg-0 mb-3 ${activeLink === index ? 'active' : ''}`} key={index}>
                  <Link to={link.to} className='nav-link p-0' onClick={() => handleLinkClick(index)}>
                    {link.text}
                  </Link>
                </li>
              ))}
              <li className='nav-item'>
                <Link to="/submission" className='primaryBtn customBtn text-white'>SUBMISSIONS</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

    </>
  );
};

export default Header;
