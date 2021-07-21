import React, { useContext } from 'react';
import { LoginContext } from '../components/App';
import { Redirect } from 'react-router-dom';

const Secret = () => {
  const value = useContext(LoginContext);
  if (value.isLogged) {
    return <h2 className="secret">Secret page</h2>;
  } else {
    return <Redirect to="/" />;
  }
};
export default Secret;
