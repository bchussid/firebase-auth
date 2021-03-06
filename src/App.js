import React from "react";
import { Context } from "./Context";
import Signup from "./Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";

//context here has to wrap everything that needs information from the 'value' prop
//this is the object in Context.js that contains our basic function definitions

function App() {
  return (
    <Router>
      <Context>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </Context>
    </Router>
  );
}

export default App;
