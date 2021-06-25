import React from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();

  return (
    <Container className="container">
      <Jumbotron className="Jumbotron shadow p-3 mb-5 bg-white rounded ">
        <h1>Welcome here!</h1>
        <p>This is a little summary of the technologies I have learned...</p>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={js} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={npm} alt="npm" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={react} alt="react" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={sass} alt="sass" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={babel} alt="babel" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={webpack} alt="webpack" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={firebase} alt="firebase" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={lodash} alt="lodash" />
          </Carousel.Item>
        </Carousel>
        <p className="paragraph">click the button to access the content</p>
        <div className="mt-3">
          <Button
            variant="outline-dark"
            size="lg"
            block
            type="submit"
            href="/login"
          >
            Skip to content
          </Button>
        </div>
      </Jumbotron>
      <div className="about_academy">
        <Container className=" text-center  container-about">
          <h6>learning is easier to do with the right company!</h6>
          <div className="button-about">
            <Button
              className="button-about"
              variant="outline-dark"
              size="lg"
              block
              type="submit"
              onClick={() => {
                history.push("/about-academy");
              }}
            >
              go to academy
            </Button>
          </div>
        </Container>
      </div>

      <div className="about_me">
        <Container className=" text-center  container-about">
          <h6>Know a little bit more about me!</h6>
          <div className="button-about">
            <Button
              className="button-about"
              variant="outline-dark"
              size="lg"
              block
              type="submit"
              onClick={() => {
                history.push("/about-me");
              }}
            >
              know me
            </Button>
          </div>
        </Container>
      </div>
      <div className="logo2">
        <h2>AGQB - blogs</h2>
      </div>
      <footer className="footer-content">
        <hr className="hr"></hr>
        <p className="footer-text">This is a blog made with tons of love!</p>
      </footer>
    </Container>
  );
};
export default Home;
