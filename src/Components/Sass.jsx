import React from "react";
import { Container } from "react-bootstrap";
import arrow from "../arrow.png";
import "../scss/app.scss";

const Sass = () => {
  return (
    <>
      <Container className="content-javascript">
        <h3 className="title-javascript">SASS</h3>
        <div className="container-javascript">
          <p className="text-javascript">
            What is Sass? That's the question we here to answer. If you're new
            to web design, you've probably heard the term floating around, but
            you might not be quite up to speed with exactly what Sass is, what
            is does, and whether or not you should be using it. In short, Sass
            is a CSS preprocessor, which adds special features such as
            variables, nested rules and mixins (sometimes referred to as
            syntactic sugar) into regular CSS. The aim is to make the coding
            process simpler and more efficient. Let's explore in more detail.
            <br></br>
            <br></br> Sass (which stands for 'Syntactically awesome style
            sheets) is an extension of CSS that enables you to use things like
            variables, nested rules, inline imports and more. It also helps to
            keep things organised and allows you to create style sheets faster.
            Sass is compatible with all versions of CSS. The only requirement
            for using it is that you must have Ruby installed.
          </p>
          <p className="text-2-javascript">This is the content created by me</p>
          <div className="javascript-video">
            <iframe
              width="450"
              height="300"
              src="https://www.youtube.com/embed/videoseries?list=PLN_bdwwGM4Gw2jRJQ1-iZF1Hfu3S1Vqb7"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Container>
      <div className="sass-container"></div>
      <div className="arrow">
        <img className="arrow" src={arrow} />
      </div>
    </>
  );
};
export default Sass;
