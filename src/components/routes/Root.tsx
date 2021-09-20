import { Router, Switch, Route } from 'react-router-dom';
import history from '../../history';
import Summary from '../pages/Summary';
import { Routes } from './urls';
import Home from '../pages/Home';

const Root = () => (
  <Router history={history}>
    <Switch>
      <Route path={Routes.HOME} component={Home} exact />
      <Route path={Routes.SUMMARY} component={Summary} exact />
    </Switch>
  </Router>
);

export default Root;
