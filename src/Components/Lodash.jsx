import React from "react";
import { Container } from "react-bootstrap";
import arrow from "../arrow.png";

import "../scss/app.scss";

const Lodash = () => {
  return (
    <>
      <Container className="content-javascript">
        <h3 className="title-javascript">Lodash</h3>
        <div className="container-javascript">
          <p className="text-javascript">
            Lodash is a reference library made with JavaScript. In addition,
            it’s the most famous successor of underscore.js. It is used for
            simplifying the handling and edition of objects, arrangements, etc.
            since this provides many useful methods to do so. At the same time,
            simplifying this work achieving that our code be much legible and
            easy to follow for third parties. As we said previously, Lodash is
            the most famous successor of underscore.js. At first it was a simple
            “fork” and more features were added. To this day it has been
            completely redesigned.
          </p>
          <p className="text-2-javascript">This is the content created by me</p>
          <div className="javascript-video">
            <iframe
              width="450"
              height="300"
              src="https://www.youtube.com/embed/videoseries?list=PLN_bdwwGM4Gwa9CXHI0h_qCgv7NT4FfAK"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Container>
      <div className="lodash-container"></div>
      <div className="arrow">
        <img className="arrow" src={arrow} />
      </div>
    </>
  );
};
export default Lodash;
