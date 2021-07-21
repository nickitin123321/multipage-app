import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Secret from './components/Secret';
import Header from './components/Header';
import Home from './components/Home';
import Context from './components/Context';

const tableData = {
  tableHeaders: ['name', 'digit'],
  tableBody: [
    ['pi', Math.PI],
    ['six', 6],
    ['thirty-two', 32],
    ['one hundred-twenty-three', 123],
  ],
};

const App = () => {
  const [isLogged, setLogged] = useState(false);

  const handleLoggin = () => {
    setLogged(!isLogged);
  };

  return (
    <Context.Provider value={{ tableData, isLogged, handleLoggin }}>
      <div className="app-wrapper">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/secret" component={Secret}></Route>
        </Switch>
      </div>
    </Context.Provider>
  );
};

export default App;
