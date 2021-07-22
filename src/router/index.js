import { Route, Switch, Redirect } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Secret from '../pages/Secret';

const getRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/secret" component={Secret}></Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default getRoutes;
