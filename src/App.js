import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Login from './auth/Login';
import SignUp from './auth/SignUp';

import Test from './components/Test';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/test" component={Test} /> //SHOULD BE PRIVATE ROUTE...
      </Switch>
    </Router>
  );
}

export default App;
