import { Router, Switch, Route } from 'react-router-dom';
import history from '../../history';
import Stepper from '../shared/Stepper';
import Summary from '../shared/Summary';
import { Routes } from './urls';

const Root = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={Routes.HOME} component={Stepper} exact />
        <Route path={Routes.SUMMARY} component={Summary} exact />
      </Switch>
    </Router>
  );
};

export default Root;
