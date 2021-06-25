import React, { useRef, useState } from "react";
import { Button, Card, Col, Row, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import "../scss/app.scss";
const Contents = () => {
  const history = useHistory();
  const { logout } = useAuth();

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
        <Row>
          <Col sm={6}>
            {" "}
            <Card className="card mt-2 mb-2">
              <Card.Body>
                <Button
                  variant="outline-dark"
                  size="lg"
                  className="button-card"
                  block
                  onClick={() => {
                    history.push("/javascript");
                  }}
                >
                  JavaScript
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className="card  mt-2 mb-2">
              <Card.Body>
                <Button
                  variant="outline-dark"
                  size="lg"
                  className="button-card"
                  block
                  onClick={() => {
                    history.push("/npm");
                  }}
                >
                  npm
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className="card mt-4  ">
              <Card.Body>
                <Button
                  variant="outline-dark"
                  size="lg"
                  className="button-card"
                  block
                  onClick={() => {
                    history.push("/react");
                  }}
                >
                  React
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className="card mt-4  ">
              <Card.Body>
                <Button
                  variant="outline-dark"
                  size="lg"
                  className="button-card"
                  block
                  onClick={() => {
                    history.push("/sass");
                  }}
                >
                  SASS
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className="card mt-4  ">
              <Card.Body>
                <Button
                  variant="outline-dark"
                  size="lg"
                  className="button-card"
                  block
                  onClick={() => {
                    history.push("/babel");
                  }}
                >
                  Babel
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className="card mt-4  ">
              <Card.Body>
                <Button
                  variant="outline-dark"
                  size="lg"
                  className="button-card"
                  block
                  onClick={() => {
                    history.push("/webpack");
                  }}
                >
                  Webpack
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} border="dark">
            <Card className="card mt-4  mb-4">
              <Card.Body>
                <Button
                  variant="outline-dark"
                  size="lg"
                  className="button-card"
                  block
                  onClick={() => {
                    history.push("/firebase");
                  }}
                >
                  Firebase
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} border="dark">
            <Card className="card mt-4  mb-4">
              <Card.Body>
                <Button
                  variant="outline-dark"
                  size="lg"
                  className="button-card"
                  block
                  onClick={() => {
                    history.push("/lodash");
                  }}
                >
                  Lodash
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Container className="container-content"></Container>
        <Container className="container-content2"></Container>
      </Container>
      <Container className="logo-content">
        <h6>If you want go out you can make signout!</h6>
        <Card className="card ">
          <Card.Body>
            <Button
              className="button-card"
              variant="outline-dark"
              size="lg"
              block
              type="submit"
              onClick={handleLogout}
            >
              Sign out
            </Button>
          </Card.Body>
        </Card>
      </Container>

      <Container className="container-content3"></Container>
      <footer className="footer-content">
        <hr className="hr"></hr>
        <p className="footer-text">This is a blog made with tons of love!</p>
      </footer>
    </>
  );
};
export default Contents;
