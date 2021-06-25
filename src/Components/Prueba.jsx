import React from "react";
import {Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Prueba = () => {
  const { logout } = useAuth();
  const history = useHistory();
  async function handleLogout() {
    try {
      await logout();
      history.push("/");
    } catch {
      console.error("Error en hacer LogOut");
    }
  }

  return (
    <>
      <Container>
        <h2>Bienvenido, accediste correctamente!</h2>
      </Container>

      <Button
        variant="primary"
        size="lg"
        block
        type="submit"
        onClick={handleLogout}
      >
        LogOut
      </Button>
    </>
  );
};
export default Prueba;
