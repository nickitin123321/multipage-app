import React, { useContext } from 'react';
import Context from './Context';
import { withRouter } from 'react-router-dom';

const Header = props => {
  const value = useContext(Context);

  const handleClickHome = () => {
    props.history.push('/');
  };

  const handleClickAbout = () => {
    props.history.push('/about');
  };

  const handleClickSecret = () => {
    props.history.push('/secret');
  };

  return (
    <div className="header">
      <button className="header_button" onClick={handleClickHome}>
        home
      </button>
      &nbsp;
      <button className="header_button" disabled={!value.isLogged} onClick={handleClickSecret}>
        secret
      </button>
      &nbsp;
      <button className="header_button" onClick={handleClickAbout}>
        about
      </button>
      &nbsp; &nbsp;
      <input type="checkbox" checked={value.isLogged} onChange={() => value.handleLoggin()}></input>
      <button className="header_button" onClick={() => value.handleLoggin()}>
        login/logout
      </button>
    </div>
  );
};
export default withRouter(Header);
