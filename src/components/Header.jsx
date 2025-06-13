import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = ({ onLogout, isLogin }) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const handleLogout = () => {
    onLogout();
    setToggle(false); 
    navigate('/');
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const closeMenu = () => {
    setToggle(false); 
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container">
        <NavLink className="navbar-brand fs-1" to="/" onClick={closeMenu}>
          <strong className="text-primary fw-bold">
            <i className="bi bi-gear-fill"></i>
          </strong>
          <strong>JobsFactory</strong>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${toggle ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto gap-4 fw-bold" style={{ fontFamily: 'revert' }}>
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={closeMenu}>HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={closeMenu}>ABOUT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/findjobs" onClick={closeMenu}>FIND JOBS</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={closeMenu}>CONTACT</NavLink>
            </li>
          </ul>

          {!isLogin && (
            <NavLink className='btn btn-success fw-bold mx-3' to="/employeelogin" onClick={closeMenu}>
              EMPLOYER
            </NavLink>
          )}

          {isLogin ? (
            <button className="btn btn-primary fw-bold mx-3" onClick={handleLogout}>
              LOG OUT
            </button>
          ) : (
            <NavLink to="/login" className="btn btn-danger fw-bold" onClick={closeMenu}>
              LOGIN / REGISTER
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
