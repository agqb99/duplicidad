import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { useHistory } from "react-router-dom";
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
