import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar({ isHomePage }) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [transparent, setTransparent] = useState(isHomePage);
  const [produtosActive, setProdutosActive] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  // Deixa a navbar transparente na posição inicial
  useEffect(() => {

    const handleScroll = () => {
      const currentPosition = window.scrollY;
      if (isHomePage) {
        setTransparent(currentPosition === 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [isHomePage]);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleProdutosClick = () => {
    setProdutosActive(!produtosActive);
    setDropdown(!dropdown);
  };

  return (
    <>
      <nav className={`navbar ${transparent && isHomePage ? 'transparent' : ''} ${isHomePage ? 'home' : ''}`}>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Nivia Andrade Naíls
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Início
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={toggleDropdown}
          >
            <Link to="#" className="nav-links">
              Produtos <i className="fas fa-caret-down" />
            </Link>
            {dropdown && (
              <Dropdown
                produtosActive={produtosActive}
                handleProdutosClick={handleProdutosClick}
                closeMobileMenu={closeMobileMenu}
              />
            )}
          </li>
          <li className={`nav-item ${dropdown && 'dropdown-active'}`}>
            <Link to="/contato" className="nav-links" onClick={closeMobileMenu}>
              Contato
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sobre" className="nav-links" onClick={closeMobileMenu}>
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
