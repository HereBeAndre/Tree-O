import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Stepper from '../shared/Stepper';
import { Routes } from './urls';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path={Routes.HOME}>
          <Stepper />
        </Route>
      </Switch>
    </Router>
  );
};

export default Root;
