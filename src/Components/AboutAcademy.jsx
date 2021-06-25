import React from "react";
import { Container } from "react-bootstrap";
import imagen from "../academy.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

import "../scss/app.scss";

const AboutAcademy = () => {
  return (
    <>
      <Container className="container">
        <div className="academy">
          <h2>About Academy </h2>
          <div className="imagen-academia">
            <img src={imagen} />
          </div>
          <div className="imagen-container"></div>
          <p className="text-academy">
            Codex is a development academy that provides to students the
            necessary material to become a fullstack developer. In conjunction
            with the best software development mentors, and the best evaluations
            and technical meetings. You do not need to have any knowledge or
            experience to be part of this family, but it is guaranteed that you
            will always have someone willing to help you.
          </p>
        </div>
        <footer className="footer">
          <hr className="hr2"></hr>
          <p className="footer-text">
            You can visit the official websites of the academy.
          </p>
          <div className="row">
            <div className="col-sm icon">
              <h3>
                {" "}
                <FaFacebook
                  onClick={() =>
                    window.open("https://www.facebook.com/codexacademyonline")
                  }
                />{" "}
              </h3>
            </div>

            <div className="col-sm icon3">
              <h3>
                <FaInstagram
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/codexacademyonline/?hl=en"
                    )
                  }
                />
              </h3>{" "}
            </div>
            <div className="col-sm icon3">
              <h3>
                <CgWebsite
                  onClick={() => window.open("https://www.codex.academy/#/")}
                />
              </h3>{" "}
            </div>
          </div>
        </footer>
      </Container>
    </>
  );
};
export default AboutAcademy;
