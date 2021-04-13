// import { render } from "@testing-library/react";
import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";

const SignUp = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();

  const initialStateValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [values, setValues] = useState(initialStateValues);
  const [show, setShow] = useState(false);
  const handleControlChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(checkConfirmPassword());
    if (checkConfirmPassword()) {
      props.addData({ email: values.email, password: values.password });
      setValues({ ...initialStateValues });
      setShow(false);
    } else {
      setShow(true);
    }
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      console.error("Error");
    }
  };

  const loadUserInForm = async (id) => {
    const busquedaUser = props.users.find((user) => id === user.id);
    setValues({
      email: busquedaUser.email,
      password: busquedaUser.password,
      //   confirmPassword: busquedaUser.confirmPassword,
    });
  };
  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      loadUserInForm(props.currentId);
    }
  }, [props.currentId]);

  //   const checkConfirmPassword = () => {
  //     if (password === confirmPasswordRef) {
  //       return true;
  //     }
  //      return false;
  //   };

  const checkConfirmPassword = () =>
    values.password === values.confirmPassword ? true : false;

  return (
    <>
      <Card>
        <Card.Body>
          <h2>Login</h2>
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
              <Alert
                variant="danger"
                onClose={() => setShow(false)}
                dismissible
              >
                <Alert.Heading>Las contraseñas no concuerdan</Alert.Heading>
              </Alert>
            ) : (
              ""
            )}
            <Button variant="primary" size="lg" block type="submit">
              {" "}
              {props.currentId === "" ? "Guardar" : "Actualizar"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
export default SignUp;

{
  /* Operador ternario */
}
