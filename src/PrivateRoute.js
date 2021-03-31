import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./Context";

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
