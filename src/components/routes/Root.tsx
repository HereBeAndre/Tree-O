import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes } from './urls';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path={Routes.HOME}>Home</Route>
      </Switch>
    </Router>
  );
};

export default Root;
