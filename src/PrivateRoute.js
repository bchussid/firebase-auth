import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./Context";

//this is essentially a wrapper for a typical route
//takes the component from a route and all the other stuff it has

//define a custom render that takes in props and checks to see if there's a current user

export default function PrivateRoute({ component: Component, ...otherStuff }) {
  const { loggedUser } = useAuth();
  return (
    <Route
      {...otherStuff}
      render={(props) => {
        return loggedUser ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
}
