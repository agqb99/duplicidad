import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2>LogIn</h2>
          {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group id="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                ref={ currentUser.email}
                placeholder="Enter email"
                required
              />
            </Form.Group>
            {/* <Form.Group id="password"> */}
            <Form.Label>
              No tienes una cuenta? <Link to="/signup">Crear Cuenta aqui</Link>
            </Form.Label>
            {/* </Form.Group> */}
            <Button
             onClick={handleLogout}
              variant="primary"
              size="lg"
              block
              type="submit"
            >
              LogIn
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
export default Login;
