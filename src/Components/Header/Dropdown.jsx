import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    if (props.closeMobileMenu) {
      props.closeMobileMenu();
    }
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        <li>
          <Link className="dropdown-link" to="/modelo-1.7" onClick={handleClick}>
            Modelos de 1,7cm
          </Link>
        </li>
        <li>
          <Link className="dropdown-link" to="/modelo-2" onClick={handleClick}>
            Modelos de 2cm
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Dropdown;
