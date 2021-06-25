import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import _ from "lodash";

const SignUp = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const history = useHistory();
  const initialStateValues = {
    email: "",
    password: "",
    confirmPasswordRef: "",
  };

  const [values, setValues] = useState(initialStateValues);
  const [show, setShow] = useState(false);
  const handleControlChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkConfirmPassword = () =>
      passwordRef.current.value === confirmPasswordRef.current.value
        ? true
        : false;

    if (checkConfirmPassword()) {
      props.addData({ email: values.email, password: values.password });
      setValues({ ...initialStateValues });
      history.push("/login");
      setShow(false);
    } else {
      setShow(true);
    }
    try {
      const lowerCaseEmail = _.toLower(emailRef.current.value);
      await signup(lowerCaseEmail, passwordRef.current.value);
    } catch {
      console.error("Error");
    }
  };

  const loadUserInForm = async (id) => {
    const busquedaUser = props.users.find((user) => id === user.id);
    setValues({
      email: busquedaUser.email,
      password: busquedaUser.password,
    });
  };
  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      loadUserInForm(props.currentId);
    }
  }, [props.currentId]);
  return (
    <>
      <h2 className="title-signin">Sign in</h2>
      <Card.Body className="card-body">
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              ref={emailRef}
              placeholder="Enter email"
              onChange={handleControlChange}
              value={values.email}
            />
          </Form.Group>

          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              ref={passwordRef}
              placeholder="Password"
              onChange={handleControlChange}
              value={values.password}
            />
          </Form.Group>
          <Form.Group id="confirmPassword">
            <Form.Label>Confirm your Password</Form.Label>
            <Form.Control
              name="confirmPassword"
              type="password"
              ref={confirmPasswordRef}
              placeholder="Confirm your Password"
              onChange={handleControlChange}
              value={values.confirmPassword}
            />
          </Form.Group>
          {show ? (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Las contraseñas no concuerdan</Alert.Heading>
            </Alert>
          ) : (
            ""
          )}
          <Form.Label>
            Ya tienes una cuenta? <Link to="/login">Log In</Link>
          </Form.Label>

          <Button variant="outline-dark" size="lg" block type="submit">
            {" "}
            {props.currentId === "" ? "Guardar" : "Actualizar"}
          </Button>
        </Form>
      </Card.Body>
      <div className="login-container"></div>
    </>
  );
};
export default SignUp;
