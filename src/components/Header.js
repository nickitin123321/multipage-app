import React, { useContext } from 'react';
import { LoginContext } from './App';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const value = useContext(LoginContext);

  return (
    <div className="header">
      <h1>
        <NavLink to="/">home</NavLink>
      </h1>
      <h1>
        <NavLink to="/secret">secret</NavLink>
      </h1>
      <h1>
        <NavLink to="/about">about</NavLink>
      </h1>
      <input type="checkbox" checked={value.isLogged} onChange={() => value.handleLogin()}></input>
      <button className="header_button" onClick={() => value.handleLogin()}>
        login/logout
      </button>
    </div>
  );
};
export default Header;
