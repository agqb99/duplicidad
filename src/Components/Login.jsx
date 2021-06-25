import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import _ from "lodash";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      const lowerCaseEmail = _.toLower(emailRef.current.value);
      await login(lowerCaseEmail, passwordRef.current.value);
      history.push("/content");
    } catch (err) {
      setError("Failed to log in: " + err.message);
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <>
      <h2 className="title-login">LogIn</h2>
      <Card.Body className="card-body">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              ref={emailRef}
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              ref={passwordRef}
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Label>
            No tienes una cuenta? <Link to="/signup">Crear Cuenta aqui</Link>
          </Form.Label>
          <Button
            disabled={loading}
            variant="outline-dark"
            size="lg"
            block
            type="submit"
          >
            LogIn
          </Button>
        </Form>
      </Card.Body>
      <div className="login-container"></div>
    </>
  );
};
export default Login;
