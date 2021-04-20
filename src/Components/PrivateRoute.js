import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function PrivateRoute({ component: Component }) {
  const { currentUser } = useAuth();

  return (
    <Route
      render={(props) => {
        return currentUser ? <Component {...props} /> : <Redirect to="/" />;
      }}
    ></Route>
  );
}
