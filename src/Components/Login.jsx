import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
const Login = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const generoRef = useRef();

  const initialStateValues = {
    email: "",
    password: "",
    genero: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleControlChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addData(values);
    setValues({ ...initialStateValues });
  };

  const loadUserInForm = async (id) => {
    const busquedaUser = props.users.find((user) => id === user.id);
    setValues({
      email: busquedaUser.email,
      password: busquedaUser.password,
      genero: busquedaUser.genero,
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
            <Form.Group id="genero">
              <Form.Label>Genero</Form.Label>
              <Form.Control
                name="genero"
                type="genero"
                ref={generoRef}
                placeholder="Genero"
                onChange={handleControlChange}
                value={values.genero}
              />
            </Form.Group>
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
export default Login;
