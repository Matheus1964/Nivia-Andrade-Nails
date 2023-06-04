import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
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

  useEffect(() => {
    setNavHeight(document.querySelector('.navbar').offsetHeight);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setNavHeight(document.querySelector('.navbar').offsetHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.paddingTop = navHeight + 'px';
  }, [navHeight]);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleProdutosClick = () => {
    setProdutosActive(!produtosActive);
    setDropdown(!dropdown);
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Nivia Andrade Naíls
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Início
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={toggleDropdown}
          >
            <Link to='#' className='nav-links'>
              Produtos <i className='fas fa-caret-down' />
            </Link>
            {dropdown && (
              <Dropdown
                produtosActive={produtosActive}
                handleProdutosClick={handleProdutosClick}
                closeMobileMenu={closeMobileMenu} 
              />
            )}
          </li>
          <li className={`nav-item ${dropdown && "dropdown-active"}`}>
            <Link to='/sobre' className='nav-links' onClick={closeMobileMenu}>
              Sobre Nós
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contato' className='nav-links' onClick={closeMobileMenu}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
