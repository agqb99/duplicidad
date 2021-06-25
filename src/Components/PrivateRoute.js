import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function PrivateRoute({ component: Component, render }) {
  const { currentUser } = useAuth();

  return (
    <Route
      render={(props) => {
        if (currentUser) {
          if (Component) {
            return <Component {...props} />;
          }
          if (render) {
            return render(props);
          }
        }
        return <Redirect to="/login"></Redirect>;
      }}
    ></Route>
  );
}
