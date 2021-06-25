import React from "react";
import { Container } from "react-bootstrap";
import arrow from "../arrow.png";

import "../scss/app.scss";

const Babel = () => {
  return (
    <>
      <Container className="content-javascript">
        <h3 className="title-javascript">Babel</h3>
        <div className="container-javascript">
          <p className="text-javascript">
            Babel is a toolchain that is mainly used to convert ECMAScript 2015+
            code into a backwards compatible version of JavaScript in current
            and older browsers or environments. Babel is a free and open-source
            JavaScript transcompiler that is mainly used to convert ECMAScript
            2015+ (ES6+) code into a backwards compatible version of JavaScript
            that can be run by older JavaScript engines. Babel is a popular tool
            for using the newest features of the JavaScript programming
            language.Here are the main things Babel can do for you: Transform
            syntax Polyfill features that are missing in your target environment
            (through a third-party polyfill such as core-js) Source code
            transformations (codemods) And more! (check out these videos for
            inspiration)
            <br></br>
            <br></br>Developers can use new JavaScript language features by
            using Babel to convert their source code into versions of JavaScript
            that Web browsers are able to process. The core version of Babel was
            downloaded 5 million times a month as of 2016, increasing to 16
            million times per week as of 2019. Babel plugins are used to
            transform syntax that is not widely supported into a
            backwards-compatible version. For example, arrow functions, which
            are specified in ES6, are converted into regular function
            declarations. Non-standard JavaScript syntax such as JSX can also be
            transformed. Babel provides polyfills to provide support for
            features that are missing entirely from JavaScript environments. For
            example, static methods like Array.from and built-ins like Promise
            are only available in ES6+, but they can be used in older
            environments if a Babel polyfill is used.
          </p>
          <p className="text-2-javascript">This is the content created by me</p>
          <div className="javascript-video">
            <iframe
              width="450"
              height="300"
              src="https://www.youtube.com/embed/videoseries?list=PLN_bdwwGM4GyNmXQ7r5jk0Sjtg155Ldmd"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Container>
      <div className="babel-container"></div>
      <div className="arrow">
        <img className="arrow" src={arrow} />
      </div>
    </>
  );
};
export default Babel;
