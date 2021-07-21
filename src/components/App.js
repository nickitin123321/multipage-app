import React, { useState } from 'react';
import Header from './Header';
import getRoutes from '../router';

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
          {getRoutes(isLogged)}
        </div>
      </LoginContext.Provider>
    </TableContext.Provider>
  );
};

export default App;
