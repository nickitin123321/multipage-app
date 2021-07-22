import { Route, Switch, Redirect } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Secret from '../pages/Secret';

const getRoutes = isAuthenticated => {
  const secret = isAuthenticated && <Route path="/secret" component={Secret}></Route>;
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      {secret}
      <Redirect to="/" />
    </Switch>
  );
};

export default getRoutes;
