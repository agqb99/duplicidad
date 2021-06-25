import React from "react";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import App from "./App";

test("renders Loading", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  );
  const linkElement = screen.getByText(/Loading/i);
  expect(linkElement).toBeInTheDocument();
});
