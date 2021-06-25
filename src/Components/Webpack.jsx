import React from "react";
import { Container } from "react-bootstrap";
import "../scss/app.scss";
import arrow from "../arrow.png";

const Webpack = () => {
  return (
    <>
      <Container className="content-javascript">
        <h3 className="title-javascript">Webpack</h3>
        <div className="container-javascript">
          <p className="text-javascript">
            webpack is a static module bundler for modern JavaScript
            applications. When webpack processes your application, it internally
            builds a dependency graph which maps every module your project needs
            and generates one or more bundles. Tip
          </p>
          <br></br> <h6>Performance</h6>
          <p className="text-javascript">
            {" "}
            webpack uses async I/O and has multiple caching levels. This makes
            webpack fast and incredibly fast on incremental compilations.
          </p>
          <h6>Module Formats</h6>
          <p className="text-javascript">
            {" "}
            webpack supports ES2015+, CommonJS and AMD modules out of the box.
            It performs clever static analysis on the AST of your code. It even
            has an evaluation engine to evaluate simple expressions. This allows
            you to support most existing libraries out of the box.
          </p>
          <h6>Code Splitting</h6>
          <p className="text-javascript">
            webpack allows you to split your codebase into multiple chunks.
            Chunks are loaded asynchronously at runtime. This reduces the
            initial loading time.
          </p>
          <h6>Optimizations</h6>
          <p className="text-javascript">
            webpack can do many optimizations to reduce the output size of your
            JavaScript by deduplicating frequently used modules, minifying, and
            giving you full control of what is loaded initially and what is
            loaded at runtime through code splitting. It can also make your code
            chunks cache friendly by using hashes.
          </p>
          <p className="text-2-javascript">This is the content created by me</p>
          <div className="javascript-video">
            <iframe
              width="450"
              height="300"
              src="https://www.youtube.com/embed/videoseries?list=PLN_bdwwGM4Gz9gzT5vcNYVGU9nGT5mb0F"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Container>
      <div className="webpack-container"></div>
      <div className="arrow">
        <img className="arrow" src={arrow} />
      </div>
    </>
  );
};
export default Webpack;
