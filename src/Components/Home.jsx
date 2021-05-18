import React, { useEffect, useRef, useState } from "react";
import {
  Form,
  Button,
  Card,
  Alert,
  Container,
  Jumbotron,
} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import js from "../js.jpg";
import react from "../react.png";
import npm from "../npm.jpg";
import sass from "../sass.png";
import babel from "../babel.jpg";
import webpack from "../webpack.png";
import firebase from "../firebase.png";
import lodash from "../lodash.jpg";
import "../scss/app.scss";

const Home = () => {
  return (
    <>
      <Container>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={js} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={npm} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={react} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={sass} alt="Fourth slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={babel} alt="Fourth slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={webpack} alt="Fourth slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={firebase}
                alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={lodash} alt="Fourth slide" />
            </Carousel.Item>
          </Carousel>
          <div className="mt-3">
            <p>
              <Button variant="outline-dark" size="lg" block type="submit">
                Dark
              </Button>
            </p>
          </div>
        </Jumbotron>
      </Container>
    </>
  );
};
export default Home;
