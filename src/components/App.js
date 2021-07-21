import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About';

import Header from './Header';
import Home from '../pages/Home';
import Secret from '../pages/Secret';

const tableData = {
  tableHeaders: ['name', 'digit'],
  tableBody: [
    ['pi', Math.PI],
    ['six', 6],
    ['thirty-two', 32],
    ['one hundred-twenty-three', 123],
  ],
};

export const TableContext = React.createContext();
export const LoginContext = React.createContext();

const App = () => {
  const [isLogged, setLogged] = useState(false);

  const handleLogin = () => {
    setLogged(!isLogged);
  };

  return (
    <TableContext.Provider value={{ tableData }}>
      <LoginContext.Provider value={{ isLogged, handleLogin }}>
        <div className="app-wrapper">
          <Header />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/secret" component={Secret}></Route>
          </Switch>
        </div>
      </LoginContext.Provider>
    </TableContext.Provider>
  );
};

export default App;
