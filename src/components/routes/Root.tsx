import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Stepper from '../shared/Stepper';
import Summary from '../shared/Summary';
import { Routes } from './urls';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path={Routes.HOME} exact>
          <Stepper />
        </Route>
        <Route path={Routes.SUMMARY} exact>
          <Summary />
        </Route>
      </Switch>
    </Router>
  );
};

export default Root;
