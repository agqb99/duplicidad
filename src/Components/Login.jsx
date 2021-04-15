import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const initialStateValues = {
    email: "",
    password: "",
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
          <h2>LogIn</h2>
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
            {/* <Form.Group id="password"> */}
            <Form.Label>
              No tienes una cuenta? <Link to="/signup">Crear Cuenta aqui</Link>
            </Form.Label>
            {/* </Form.Group> */}
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
