import React, { useContext } from 'react';
import { LoginContext } from './App';
import { Link } from 'react-router-dom';

const Header = () => {
  const value = useContext(LoginContext);

  return (
    <div className="header">
      <Link to="/">home</Link>
      &nbsp;
      <Link to="/secret">secret</Link>
      &nbsp;
      <Link to="/about">about</Link>
      &nbsp;
      <input type="checkbox" checked={value.isLogged} onChange={() => value.handleLoggin()}></input>
      <button className="header_button" onClick={() => value.handleLoggin()}>login/logout</button>
    </div>
  );
};
export default Header;
