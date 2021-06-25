import React from "react";
import { Container } from "react-bootstrap";
import imagen from "../me.jpg";
import "../scss/app.scss";

const AboutMe = () => {
  return (
    <>
      <Container>
        {" "}
        <h2 className="about-me-title">About me </h2>
        <p className="about-me-text">
          I am Honduran, I am 20 years old and I consider myself a lover of
          learning, my dream has been to become a developer and since I joined
          codex it has come true. When I started here I had no idea how much I
          could learn, I think that the development of software is more
          important and more used every day. I am super excited about this
          project, where I want to put my acquired knowledge into practice.
        </p>
        <div className="imagen">
          <img className="me" src={imagen} />
        </div>
        <div className="color-container"></div>
        <footer className="footer">
          <hr className="hr"></hr>
          <p class="footer-text">This is a blog made with tons of love!</p>
        </footer>
      </Container>
    </>
  );
};
export default AboutMe;
