import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // const initialStateValues = {
  //   email: "",
  //   password: "",
  // };

  // const [values, setValues] = useState(initialStateValues);

  // const handleControlChange = async (e) => {
  //   const { name, value } = e.target;
  //   setValues({ ...values, [name]: value });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // props.addData(values);
    // setValues({ ...initialStateValues });
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/prueba");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  };

  // const loadUserInForm = async (id) => {
  //   const busquedaUser = props.users.find((user) => id === user.id);
  //   setValues({
  //     email: busquedaUser.email,
  //     password: busquedaUser.password,
  //   });
  // };
  // useEffect(() => {
  //   if (props.currentId === "") {
  //     setValues({ ...initialStateValues });
  //   } else {
  //     loadUserInForm(props.currentId);
  //   }
  // }, [props.currentId]);

  return (
    <>
      <Card>
        <Card.Body>
          <h2>LogIn</h2>
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
            {/* <Form.Group id="password"> */}
            <Form.Label>
              No tienes una cuenta? <Link to="/signup">Crear Cuenta aqui</Link>
            </Form.Label>
            {/* </Form.Group> */}
            <Button
              disabled={loading}
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
