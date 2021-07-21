import React, { useContext } from 'react';
import { LoginContext } from './App';
import { Link } from 'react-router-dom';

const Header = () => {
  const value = useContext(LoginContext);

  return (
    <div className="header">
      <h1>
        <Link to="/">home</Link>
      </h1>
      <h1>
        <Link to="/secret">secret</Link>
      </h1>
      <h1>
        <Link to="/about">about</Link>
      </h1>
      <input type="checkbox" checked={value.isLogged} onChange={() => value.handleLogin()}></input>
      <button className="header_button" onClick={() => value.handleLogin()}>
        login/logout
      </button>
    </div>
  );
};
export default Header;
